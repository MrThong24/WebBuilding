import type { MetadataRoute } from "next";
import { SITE_URL } from "./constant/unit";
import { dataAbout } from "./about/mockData";
import { dataListProject } from "./layout/header/mockData";
import { listNews } from "./news/Mockdata";
import { listProject } from "./projects/[slug]/mockData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/contact/",
    "/news/",
    ...dataAbout.map(({ href }) => `/about/${href}/`),
    ...listNews.map(({ slug }) => `/news/${slug}/`),
    ...dataListProject.map(({ href }) => `${href}/`),
    ...listProject.map(({ type, slug }) => `/projects/${type}/${slug}/`),
  ];

  return routes.map((route) => ({ url: new URL(route, SITE_URL).href }));
}
