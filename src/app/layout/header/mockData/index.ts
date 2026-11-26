import { GRANITO_PROJECT, TypeAbout, TypeService } from "@/app/constant/unit";

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
    heading: "Tất cả dự án",
    description:
      "Khám phá các dự án và giải pháp thi công của Đại Tiến Phát, từ sân thể thao, công trình dân dụng, nhà xưởng đến hạ tầng kỹ thuật và đá mài Granito.",
  },
  {
    name: "Sân thể thao",
    href: `/projects/san-choi-the-thao`,
    slug: "san-choi-the-thao",
    heading: "Thi công sân thể thao",
    description:
      "Xem các dự án sân thể thao của Đại Tiến Phát cùng hướng dẫn thi công, xử lý nền và dự toán chi phí sân Pickleball.",
  },
  {
    name: "Công trình dân dụng và công nghiệp",
    href: `/projects/cong-trinh-dan-dung-va-cong-nghiep`,
    slug: "cong-trinh-dan-dung-va-cong-nghiep",
    heading: "Công trình dân dụng và công nghiệp",
    description:
      "Tìm hiểu giải pháp thi công nhà thép tiền chế của Đại Tiến Phát cho nhà xưởng, kho bãi và không gian kinh doanh như nhà hàng, quán cà phê.",
  },
  {
    name: "Công trình hạ tầng kỹ thuật",
    href: `/projects/cong-trinh-ha-tang-ky-thuat`,
    slug: "cong-trinh-ha-tang-ky-thuat",
    heading: "Công trình hạ tầng kỹ thuật",
    description:
      "Xem các giải pháp hạ tầng kỹ thuật của Đại Tiến Phát, gồm san lấp mặt bằng, hệ thống cấp thoát nước và thoát nước mưa cho công trình.",
  },
  {
    name: "Sửa chửa - Cải tạo công trình",
    href: `/projects/sua-chua-cai-tao-cong-trinh`,
    slug: "sua-chua-cai-tao-cong-trinh",
    heading: "Sửa chữa và cải tạo công trình",
    description:
      "Tìm hiểu các hạng mục sửa chữa, cải tạo nhà ở và nhà xưởng, từ khảo sát hiện trạng đến lập phương án thi công và nghiệm thu.",
  },
  {
    name: "Trung tâm thương mại",
    href: `/projects/trung-tam-thuong-mai`,
    slug: "trung-tam-thuong-mai",
    heading: "Thi công nội thất trung tâm thương mại",
    description:
      "Xem các dự án thi công và hoàn thiện gian hàng, showroom và quán cà phê trong trung tâm thương mại của Đại Tiến Phát.",
  },
  {
    name: "Công trình khu nghỉ dưỡng",
    href: `/projects/cong-trinh-khu-nghi-duong`,
    slug: "cong-trinh-khu-nghi-duong",
    heading: "Công trình khu nghỉ dưỡng",
    description:
      "Khám phá các hạng mục thi công tại khu nghỉ dưỡng của Đại Tiến Phát, gồm Beach Club Fusion Nam Phát và dự án Nam Hội An.",
  },
  {
    ...GRANITO_PROJECT,
    href: `/projects/${GRANITO_PROJECT.slug}`,
    heading: `Thi công ${GRANITO_PROJECT.name}`,
    description:
      "Tìm hiểu dịch vụ thi công đá mài Granito và đá rửa của Đại Tiến Phát. Xem báo giá Granito, ứng dụng nội thất và giải pháp sàn cho nhà máy chế biến thủy sản.",
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
