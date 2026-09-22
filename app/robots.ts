import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/team/", "/onboarding/"],
    },
    sitemap: "https://yourzaxbys.hustlelaunch.com/sitemap.xml",
  };
}
