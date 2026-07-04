# Gallery Media Folders

Drop your media files in these folders:

- `src/assets/gallery/images/` for photos
- `src/assets/gallery/videos/` for videos

Supported image formats:
- `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`

Supported video formats:
- `.mp4`, `.webm`, `.mov`

How auto-loading works:
- `src/routes/gallery.tsx` auto-discovers files from these folders using `import.meta.glob`.
- New files are included automatically by filename order.
- If your dev server does not pick up newly added files immediately, restart it once.

Performance tips:
- Prefer WebP/AVIF images.
- Keep video resolution around 720p-1080p for web.
- Use H.264 `.mp4` for best browser compatibility.
