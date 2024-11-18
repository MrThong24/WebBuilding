import { TypeService } from "@/app/constant/unit";

interface ServiceItem {
  name: string;
  href: string;
}
export const dataService: ServiceItem[] = [
  {
    name: "Thi công hoàn thiện - nội thất",
    href: `${TypeService.THI_CONG_HOAN_THIEN_NOI_THAT_TYPE}`,
  },
  {
    name: "Thi công nhà xưởng công nghiệp",
    href: `${TypeService.THI_CONG_NHA_XUONG_CONG_NGHIEP_TYPE}`,
  },
  {
    name: "Thi công công trình dân dụng",
    href: `${TypeService.THI_CONG_CONG_TRINH_DAN_DUNG_TYPE}`,
  },
  {
    name: "Thi công hạ tầng kỹ thuật và cấp thoát nước",
    href: `${TypeService.THI_CONG_HA_TANG_KY_THUAT_TYPE}`,
  },
  {
    name: "Thi công cảnh quan",
    href: `${TypeService.THI_CONG_CANH_QUAN_TYPE}`,
  },
  {
    name: "Cải tạo, sửa chữa công trình",
    href: `${TypeService.CAI_TAO_SUA_CHUA_CONG_TRINH_TYPE}`,
  },
  {
    name: "Sản xuất và thương mại nội thất, quảng cáo",
    href: `${TypeService.SAN_XUAT_THUONG_MAI_NOI_THAT_QUANG_CAO_TYPE}`,
  },
];
