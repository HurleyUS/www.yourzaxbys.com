// fallow-ignore-file unused-file
// Executed directly by bun test; this repository has no test-runner plugin configuration.
import { expect, mock, test } from "bun:test";
import { NextRequest, NextResponse } from "next/server";
const { createRouteMatcher } = await import("@clerk/nextjs/server");
process.env.CLERK_SECRET_KEY = "test-only";
process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "pk_test_boundary";
const authenticate = mock(() => NextResponse.json({}, { status: 401 }));
mock.module("@clerk/nextjs/server", () => ({ createRouteMatcher, clerkMiddleware: () => authenticate }));
const { default: proxy } = await import("./proxy.ts");
test("portfolio HTML stays public without Clerk handshake", async () => {
 for (const path of ["/","/about","/features","/robots.txt","/sitemap.xml"]) {
 const r = await proxy(new NextRequest("https://portfolio.hustlelaunch.com" + path, {headers:{accept:"text/html", "user-agent":"Googlebot/2.1"}}), {});
 expect(r.status).toBe(200);
 }
 expect(authenticate).not.toHaveBeenCalled();
});
test("private routes and authentication retain Clerk", async () => {
 for (const path of ["/dashboard", "/team", "/login", "/api/private"]) { const r = await proxy(new NextRequest("https://portfolio.hustlelaunch.com" + path), {}); expect(r.status).toBe(401); }
});
