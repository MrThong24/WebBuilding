import { StaticImageData } from "next/image";

import { listProjectCaiTaoSuaChuaCongTrinh } from "./CaiTaoSuaChuaCongTrinh";
import { listProjectTrungTamThuongMai } from "./TrungTamThuongMai";
import { listProjectCongTrinhHaTangKyThuat } from "./CongTrinhHaTangKyThuat";
import { listSanChoiTheThao } from "./SanChoiTheThao";

export interface Project {
  id: number;
  title: string;
  img: string | StaticImageData;
  type: string;
  col: number;
  slug: string;
  time: string;
  des: string;
  content: string;
}

export const listProject: Project[] = [
  ...listSanChoiTheThao,
  ...listProjectTrungTamThuongMai,
  ...listProjectCaiTaoSuaChuaCongTrinh,
  ...listProjectCongTrinhHaTangKyThuat,
];
