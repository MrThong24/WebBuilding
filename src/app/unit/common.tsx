import { TypeAbout, TypeService } from "../constant/unit";

export const getTypeNameAbout = (id: string): string => {
  // Định nghĩa kiểu trả về cho hàm
  switch (id) {
    case TypeAbout.TONG_QUAN_TYPE:
      return "Tổng quan";

    case TypeAbout.LICH_SU_PHAT_TRIEN_TYPE:
      return "Lịch sử phát triễn";

    case TypeAbout.TAM_NHIN_SU_MENH_GIA_TRI_COT_LOI_TYPE:
      return "Tầm nhìn sứ mệnh giá trị cốt lõi";

    case TypeAbout.SO_DO_TO_CHUC_TYPE:
      return "Sơ đồ tổ chức";

    case TypeAbout.LINH_VUC_HOAT_DONG_TYPE:
      return "Lĩnh vực hoạt động";

    default:
      return ""; // Giá trị mặc định nếu không khớp
  }
};

export const getTypeNameService = (id: string): string => {
  // Định nghĩa kiểu trả về cho hàm
  switch (id) {
    case TypeService.THI_CONG_HOAN_THIEN_NOI_THAT_TYPE:
      return "Thi công hoàn thiện - nội thất";
    case TypeService.THI_CONG_NHA_XUONG_CONG_NGHIEP_TYPE:
      return "Thi công nhà xưởng công nghiệp";
    case TypeService.THI_CONG_CONG_TRINH_DAN_DUNG_TYPE:
      return "Thi công công trình dân dụng";
    case TypeService.THI_CONG_HA_TANG_KY_THUAT_TYPE:
      return "Thi công hạ tầng kỹ thuật và cấp thoát nước";
    case TypeService.THI_CONG_CANH_QUAN_TYPE:
      return "Thi công cảnh quan";
    case TypeService.CAI_TAO_SUA_CHUA_CONG_TRINH_TYPE:
      return "Cải tạo, sửa chữa công trình";
    case TypeService.SAN_XUAT_THUONG_MAI_NOI_THAT_QUANG_CAO_TYPE:
      return "Sản xuất và thương mại nội thất, quảng cáo";
    default:
      return ""; // Giá trị mặc định nếu không khớp
  }
};
export const getLink = (title: string) => {
  switch (title) {
    case "LIÊN HỆ":
      return "/contact";
    case "DỰ ÁN":
      return "/projects";
    case "TIN TỨC":
      return "/news";
    default:
      return "/";
  }
};
