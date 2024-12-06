import { TypeAbout } from "@/app/constant/unit";

// Define an interface for the data structure
interface AboutItem {
  name: string;
  href: string;
}
interface AboutDADTH {
  title: string;
  des: string;
}
interface AboutListChild {
  title: string;
  des: string;
}
export const dataAbout: AboutItem[] = [
  {
    name: "Tổng quan",
    href: `${TypeAbout.TONG_QUAN_TYPE}`,
  },
  {
    name: "Lịch sử và cột mốc phát triển",
    href: `${TypeAbout.LICH_SU_PHAT_TRIEN_TYPE}`,
  },
  {
    name: "Tầm nhìn, sứ mệnh và giá trị cốt lõi",
    href: `${TypeAbout.TAM_NHIN_SU_MENH_GIA_TRI_COT_LOI_TYPE}`,
  },
  {
    name: "Sơ đồ tổ chức",
    href: `${TypeAbout.SO_DO_TO_CHUC_TYPE}`,
  },
  {
    name: "Lĩnh vực hoạt động",
    href: `${TypeAbout.LINH_VUC_HOAT_DONG_TYPE}`,
  },
];
export const dataDuAnDaThucHien: AboutDADTH[] = [
  {
    title: "Lotte Tây Hồ",
    des: `Thi công hoàn thiện nội thất cho trung tâm thương mại và khu căn hộ cao cấp tại Hà Nội.`,
  },
  {
    title: "Vincom Đà Nẵng",
    des: `Thực hiện hạng mục Fit Out cho trung tâm thương mại và khu vui chơi giải trí.`,
  },
  {
    title: "Hoiana Nam Hội An",
    des: `Đảm nhận thi công hạ tầng và cảnh quan cho khu nghỉ dưỡng phức hợp tại Quảng Nam.`,
  },
  {
    title: "FLC Thanh Hóa",
    des: `Tham gia xây dựng và hoàn thiện các hạng mục trong khu đô thị và nghỉ dưỡng.`,
  },
  {
    title: "Showroom Toyota Đà Nẵng",
    des: `Thi công xây dựng và hoàn thiện nội thất cho showroom ô tô.`,
  },
  {
    title: "Nhà máy sản xuất tại Khu công nghiệp Hòa Khánh",
    des: `Xây dựng và lắp đặt hệ thống hạ tầng kỹ thuật cho nhà máy công nghiệp.`,
  },
];
export const dataSanTheThao: AboutListChild[] = [
  { title: "Thi công sân pickleball", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
];
export const dataCaiTaoSuaChuaCongTrinh: AboutListChild[] = [
  { title: "Sửa chữa, bảo dưỡng hệ thống điều hoà, không khí", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
  { title: "Sửa chữa điện nước", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
  { title: "Chống thấm và xử lý độ ẩm", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
  { title: "Cải tạo mặt tiền, nội thất, ngoại thất và cảnh quan", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
  { title: "Cách âm, cách nhiệt", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
  { title: "Cải tạo công trình phụ", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
];
export const dataCongTrinhNhaThep: AboutListChild[] = [
  { title: "Thi công nhà thép cho nhà xưởng, kho bãi", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
  { title: "Thi công nhà thép cho công trình công nghiệp", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
  { title: "Thi công nhà thép cho công trình dân dụng", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
  { title: "Thi công nhà thép cho công trình thể thao và giải trí", des: "Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội thất chuyên sâu, phù hợp với nhiều loại hình công trình như" },
];
