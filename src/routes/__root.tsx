import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const WHATSAPP_NUMBER = "919664867782";
const WHATSAPP_WELCOME_MESSAGE =
  "Hello Deepindustries Team, welcome! I am interested in your solutions. Please share complete details about suitable products, pricing, and the next steps for consultation.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_WELCOME_MESSAGE)}`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Deepindustries Elevate is a modern website showcasing automation machines with an elegant, minimalist design." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Deepindustries Elevate is a modern website showcasing automation machines with an elegant, minimalist design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Deepindustries Elevate is a modern website showcasing automation machines with an elegant, minimalist design." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45b4b068-3306-4b7e-8306-6b523d7ff689/id-preview-fdc9a46c--29b8ddc6-5b4d-478b-b896-2246277b4eb0.lovable.app-1782618722987.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45b4b068-3306-4b7e-8306-6b523d7ff689/id-preview-fdc9a46c--29b8ddc6-5b4d-478b-b896-2246277b4eb0.lovable.app-1782618722987.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WelcomeWhatsAppPrompt />
      <FloatingWhatsAppButton />
    </QueryClientProvider>
  );
}

function WelcomeWhatsAppPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!isHomePage) {
      setIsVisible(false);
      return;
    }

    const alreadyShown = window.sessionStorage.getItem("wa-welcome-shown") === "1";
    if (alreadyShown) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true);
      window.sessionStorage.setItem("wa-welcome-shown", "1");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [isHomePage]);

  if (!isVisible || !isHomePage) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-5 z-50 w-[min(92vw,340px)] rounded-2xl border border-border bg-background p-4 shadow-xl md:bottom-24">
      <p className="text-sm font-semibold text-foreground">Welcome to Deepindustries</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Need product details or pricing? Start a quick WhatsApp chat with our team.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[#20c05a]"
        >
          Chat on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="inline-flex items-center justify-center rounded-md border border-input px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:h-14 md:w-14"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/60 animate-ping"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current md:h-7 md:w-7"
      >
        <path d="M20.52 3.48A11.92 11.92 0 0 0 12.02 0C5.38 0 .01 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.58A11.95 11.95 0 0 0 12.02 24H12c6.62 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.95h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.67.94.98-3.58-.24-.37A9.93 9.93 0 0 1 2.1 12C2.1 6.53 6.54 2.1 12 2.1a9.9 9.9 0 0 1 7.01 2.9A9.9 9.9 0 0 1 21.9 12c0 5.47-4.44 9.95-9.9 9.95zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.19.3-.76.97-.93 1.17-.17.2-.34.22-.64.08-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.47.13-.62.14-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.58-.9-2.16-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.06 2.88 1.2 3.08c.15.2 2.09 3.19 5.07 4.47.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.56-.35z" />
      </svg>
    </a>
  );
}
