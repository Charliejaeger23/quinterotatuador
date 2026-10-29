import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return process.env.QT_REVIEW !== "false"
    ? { rules: { userAgent: "*", disallow: "/" } }
    : {
        rules: { userAgent: "*", allow: "/" },
        sitemap: siteConfig.url + "/sitemap.xml",
      };
}
