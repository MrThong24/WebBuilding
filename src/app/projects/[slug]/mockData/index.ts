import { StaticImageData } from "next/image";

import { listProjectCaiTaoSuaChuaCongTrinh } from "./CaiTaoSuaChuaCongTrinh";
import { listProjectTrungTamThuongMai } from "./TrungTamThuongMai";
import { listProjectCongTrinhHaTangKyThuat } from "./CongTrinhHaTangKyThuat";
import { listSanChoiTheThao } from "./SanChoiTheThao";
import { listProjectCongTrinhDanDungVaCongNghiep } from "./CongTrinhDanDungVaCongNghiep";
import { listProjectCongTrinhKhuNghiDuong } from "./CongTrinhKhuNghiDuong";

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
  ...listProjectCongTrinhDanDungVaCongNghiep,
  ...listProjectCongTrinhKhuNghiDuong,
];
