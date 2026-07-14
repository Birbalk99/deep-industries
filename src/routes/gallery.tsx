import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Play, ImageIcon, Film } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Deepindustries" },
      { name: "description", content: "Photographs of the Deepindustries factory, equipment, installations and projects from across India and abroad." },
      { property: "og:title", content: "Gallery — Deepindustries" },
      { property: "og:description", content: "Factory, equipment, installations and projects in pictures." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images = [
  // Populated from folder via Vite glob below.
];

const imageModules = import.meta.glob(
  "../assets/gallery/images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" },
) as Record<string, string>;

const videoModules = import.meta.glob(
  "../assets/gallery/videos/*.{mp4,webm,mov,MP4,WEBM,MOV}",
  { eager: true, import: "default" },
) as Record<string, string>;

function extractBaseName(filePath: string) {
  const filename = filePath.split("/").pop() ?? filePath;
  return filename.replace(/\.[^/.]+$/, "");
}

function toLabel(filePath: string) {
  return extractBaseName(filePath)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

const imageList = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, alt: toLabel(path), key: extractBaseName(path) }));

const imageByBaseName = Object.fromEntries(imageList.map((image) => [image.key, image.src]));

const videos = Object.entries(videoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const key = extractBaseName(path);
    return {
      src,
      title: toLabel(path),
      poster: imageByBaseName[key],
      key,
    };
  });

const IMAGES_BATCH_SIZE = 8;
const VIDEOS_BATCH_SIZE = 4;

function AutoPlayVideoTile({
  src,
  poster,
  title,
  onOpen,
}: {
  src: string;
  poster?: string;
  title: string;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          void node.play().catch(() => {
            // Autoplay may be blocked in some browsers; controls in preview remain available.
          });
          return;
        }

        node.pause();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="h-44 w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <p className="line-clamp-2 text-xs font-semibold text-white md:text-sm">{title}</p>
        <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/90 text-foreground transition-transform group-hover:scale-110 md:size-9">
          <Play className="size-4 fill-current" />
        </span>
      </div>
    </button>
  );
}

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(IMAGES_BATCH_SIZE);
  const [visibleVideoCount, setVisibleVideoCount] = useState(VIDEOS_BATCH_SIZE);
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[number] | null>(null);
  const visibleImages = useMemo(() => imageList.slice(0, visibleCount), [visibleCount]);
  const visibleVideos = videos.slice(0, visibleVideoCount);
  const hasMoreImages = visibleCount < imageList.length;
  const hasMoreVideos = visibleVideoCount < videos.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">Media Library</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[0.95]">
            Product visuals, plant walkthroughs<br />and project highlights.
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
              <ImageIcon className="size-3.5 text-accent" /> {imageList.length} images detected
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
              <Film className="size-3.5 text-accent" /> {videos.length} videos detected
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto rounded-3xl border border-border bg-card/40 p-6 md:p-8">
          <div className="mb-8">
            <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold">Video Gallery</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Machine videos</h2>
          </div>
          {videos.length === 0 && (
            <p className="rounded-2xl border border-dashed border-border px-4 py-6 text-sm text-muted-foreground">
              No videos found. Add files to: src/assets/gallery/videos
            </p>
          )}
          {videos.length > 0 && (
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="min-w-0 flex-1 overflow-x-auto pb-2">
              <div className="grid min-w-max grid-flow-col grid-rows-2 gap-3 auto-cols-[270px] md:auto-cols-[320px]">
                {visibleVideos.map((video, idx) => (
                  <Reveal key={`${video.title}-${idx}`} delay={(idx % 4) * 70}>
                    <AutoPlayVideoTile
                      src={video.src}
                      poster={video.poster}
                      title={video.title}
                      onOpen={() => setSelectedVideo(video)}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
            {hasMoreVideos && (
              <div className="md:w-44 md:shrink-0 md:self-center md:pl-2">
                <button
                  type="button"
                  onClick={() => setVisibleVideoCount((prev) => prev + VIDEOS_BATCH_SIZE)}
                  className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:bg-card"
                >
                  More Videos
                </button>
              </div>
            )}
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto rounded-3xl border border-border bg-card/40 p-6 md:p-8">
          <div className="mb-8">
            <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold">Photo Gallery</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Plant and product images</h2>
          </div>
          {imageList.length === 0 && (
            <p className="rounded-2xl border border-dashed border-border px-4 py-6 text-sm text-muted-foreground">
              No images found. Add files to: src/assets/gallery/images
            </p>
          )}
          {imageList.length > 0 && (
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="min-w-0 flex-1 overflow-x-auto pb-2">
              <div className="grid min-w-max grid-flow-col grid-rows-3 gap-3 auto-cols-[210px] md:auto-cols-[260px]">
                {visibleImages.map((img, idx) => (
                  <Reveal key={`${img.alt}-${idx}`} delay={(idx % 6) * 60} className="group overflow-hidden rounded-2xl bg-card">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:h-52"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
            {hasMoreImages && (
              <div className="md:w-44 md:shrink-0 md:self-center md:pl-2">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + IMAGES_BATCH_SIZE)}
                className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:bg-card"
              >
                More Images
              </button>
              </div>
            )}
            </div>
          )}
        </div>
      </section>

      <Dialog
        open={selectedVideo !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedVideo(null);
          }
        }}
      >
        <DialogContent className="w-[min(92vw,980px)] max-w-none border-none bg-black p-0">
          {selectedVideo && (
            <video
              key={selectedVideo.src}
              src={selectedVideo.src}
              poster={selectedVideo.poster}
              className="max-h-[80vh] w-full bg-black object-contain"
              controls
              autoPlay
              playsInline
            />
          )}
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
}