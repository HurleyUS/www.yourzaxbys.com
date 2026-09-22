import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest, type NextFetchEvent } from "next/server";

const clerkReady =
  typeof process.env.CLERK_SECRET_KEY === "string" &&
  process.env.CLERK_SECRET_KEY.length > 0 &&
  typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === "string" &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_");

const isPublicRoute = createRouteMatcher([
  "/",
  "/login(.*)",
  "/signup(.*)",
  "/about(.*)",
  "/features(.*)",
  "/pricing(.*)",
  "/contact(.*)",
  "/testimonials(.*)",
  "/blog(.*)",
  "/news(.*)",
  "/privacy(.*)",
  "/terms(.*)",
  "/docs(.*)",
  "/api-docs(.*)",
  "/help(.*)",
  "/community(.*)",
  "/status(.*)",
  "/api/webhook(.*)",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/sentry-example-page(.*)",
]);

const authenticate = clerkReady
  ? clerkMiddleware(async (auth, req) => {
      if (!isPublicRoute(req)) {
        await auth.protect();
      }
    })
  : () => NextResponse.next();

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  // Anonymous public HTML must bypass Clerk's session handshake itself.
  const needsSession = /^\/(?:login|signup|sign-in|sign-up|api)(?:\/|$)/.test(request.nextUrl.pathname);
  if (isPublicRoute(request) && !needsSession) return NextResponse.next();
  return authenticate(request, event);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
