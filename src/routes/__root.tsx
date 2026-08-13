import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultCTA } from "@/components/sticky-cta";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-eyebrow mb-6">Error / 404</div>
        <h1 className="font-display text-7xl italic mb-4">Not found.</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for has moved, or does not exist.
        </p>
        <Link to="/" className="btn-primary">Return home</Link>
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
    <div className="flex min-h-dvh items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-eyebrow mb-6">Unexpected error</div>
        <h1 className="font-display text-5xl italic mb-4">Something went wrong.</h1>
        <p className="text-muted-foreground mb-8">
          Please try again, or head back to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
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
      { title: "Anchorfield — Australia's Financial-Grade Buyer's Advocacy" },
      { name: "description", content: "Anchorfield combines mortgage expertise with strategic property acquisition. Buy with financial intelligence, not emotion." },
      { name: "author", content: "Anchorfield" },
      { property: "og:site_name", content: "Anchorfield" },
      { property: "og:title", content: "Anchorfield — Financial-Grade Buyer's Advocacy" },
      { property: "og:description", content: "Australia's next-generation buyer's advocacy. Mortgage expertise meets strategic acquisition." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FBFAF8" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,75..100,400..900;1,75..100,400..800&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Jost:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
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
      <body>
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
      <div className="min-h-dvh bg-background text-foreground">
        <SiteNav />
        <main id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
        <SiteFooter />
        <StickyConsultCTA />
      </div>
    </QueryClientProvider>
  );
}
