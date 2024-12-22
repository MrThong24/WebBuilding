import { TypeAbout, TypeService } from "@/app/constant/unit";

export const dataIntroduce = [
  {
    name: "Tổng quan",
    href: `/about/${TypeAbout.TONG_QUAN_TYPE}`,
  },
  {
    name: "Lịch sử và cột mốc phát triển",
    href: `/about/${TypeAbout.LICH_SU_PHAT_TRIEN_TYPE}`,
  },
  {
    name: "Tầm nhìn, sứ mệnh và giá trị cốt lõi",
    href: `/about/${TypeAbout.TAM_NHIN_SU_MENH_GIA_TRI_COT_LOI_TYPE}`,
  },
  {
    name: "Sơ đồ tổ chức",
    href: `/about/${TypeAbout.SO_DO_TO_CHUC_TYPE}`,
  },
  {
    name: "Lĩnh vực hoạt động",
    href: `/about/${TypeAbout.LINH_VUC_HOAT_DONG_TYPE}`,
  },
];

export const dataListProject = [
  {
    name: "Tất cả",
    href: `/projects/tat-ca`,
    slug: "tat-ca",
  },
  {
    name: "Sân thể thao",
    href: `/projects/san-choi-the-thao`,
    slug: "san-choi-the-thao",
  },
  {
    name: "Công trình dân dụng và công nghiệp",
    href: `/projects/cong-trinh-dan-dung-va-cong-nghiep`,
    slug: "cong-trinh-dan-dung-va-cong-nghiep",
  },
  {
    name: "Công trình hạ tầng kỹ thuật",
    href: `/projects/cong-trinh-ha-tang-ky-thuat`,
    slug: "cong-trinh-ha-tang-ky-thuat",
  },
  {
    name: "Sửa chửa - Cải tạo công trình",
    href: `/projects/sua-chua-cai-tao-cong-trinh`,
    slug: "sua-chua-cai-tao-cong-trinh",
  },
  {
    name: "Trung tâm thương mại",
    href: `/projects/trung-tam-thuong-mai`,
    slug: "trung-tam-thuong-mai",
  },
  {
    name: "Công trình khu nghỉ dưỡng",
    href: `/projects/cong-trinh-khu-nghi-duong`,
    slug: "cong-trinh-khu-nghi-duong",
  },
];

export const dataService = [
  {
    name: "Thi công hoàn thiện - nội thất",
    href: `/service/${TypeService.THI_CONG_HOAN_THIEN_NOI_THAT_TYPE}`,
  },
  {
    name: "Thi công nhà xưởng công nghiệp",
    href: `/service/${TypeService.THI_CONG_NHA_XUONG_CONG_NGHIEP_TYPE}`,
  },
  {
    name: "Thi công công trình dân dụng",
    href: `/service/${TypeService.THI_CONG_CONG_TRINH_DAN_DUNG_TYPE}`,
  },
  {
    name: "Thi công hạ tầng kỹ thuật và cấp thoát nước",
    href: `/service/${TypeService.THI_CONG_HA_TANG_KY_THUAT_TYPE}`,
  },
  {
    name: "Thi công cảnh quan",
    href: `/service/${TypeService.THI_CONG_CANH_QUAN_TYPE}`,
  },
  {
    name: "Cải tạo, sửa chữa công trình",
    href: `/service/${TypeService.CAI_TAO_SUA_CHUA_CONG_TRINH_TYPE}`,
  },
  {
    name: "Sản xuất và thương mại nội thất, quảng cáo",
    href: `/service/${TypeService.SAN_XUAT_THUONG_MAI_NOI_THAT_QUANG_CAO_TYPE}`,
  },
];
