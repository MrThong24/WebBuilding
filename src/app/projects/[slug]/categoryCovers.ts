import { GRANITO_PROJECT } from "@/app/constant/unit";
import defaultCover from "@/app/assest/image/projects/logo-about-dai-tien-phat-du-an.webp";

const categoryCovers: Partial<Record<string, string>> = {
  "san-choi-the-thao": "/images/project/categories/san-the-thao.webp", // Pexels 37143606
  "cong-trinh-dan-dung-va-cong-nghiep":
    "/images/project/categories/dan-dung-cong-nghiep.webp", // Pexels 3831826
  "cong-trinh-ha-tang-ky-thuat":
    "/images/project/categories/ha-tang-ky-thuat.webp", // Pexels 35425762
  "sua-chua-cai-tao-cong-trinh":
    "/images/project/categories/sua-chua-cai-tao.webp", // Pexels 20648486
  "trung-tam-thuong-mai":
    "/images/project/categories/trung-tam-thuong-mai.webp", // Pexels 7314561
  "cong-trinh-khu-nghi-duong":
    "/images/project/categories/khu-nghi-duong.webp", // Pexels 6460876
  [GRANITO_PROJECT.slug]:
    "/images/project/categories/da-mai-granito-da-rua.webp", // ambientCG Terrazzo002 (CC0)
};

export function getProjectCategoryCover(slug: string) {
  return categoryCovers[slug] ?? defaultCover;
}
