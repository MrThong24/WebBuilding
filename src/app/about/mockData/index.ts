import { TypeAbout } from "@/app/constant/unit";
import pickleball from "../../assest/image/pickleball.png";
import ThiCong from "../../assest/image/ThiCong.png";
import NhaThep from "../../assest/image/NhaThep.png";
import { StaticImageData } from "next/image";
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
  slug:string;
  icon:string | StaticImageData
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
  { title: "Thi công sân pickleball", des: "Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát chuyên thi công sân pickleball chất lượng cao, từ thiết kế đến xây dựng hoàn thiện. Chúng tôi đảm bảo sân thi đấu bền vững, an toàn và đáp ứng tiêu chuẩn quốc tế, với các giải pháp tối ưu cho mặt sân, hệ thống chiếu sáng và thiết bị hỗ trợ.", slug: "san-choi-the-thao", icon: pickleball},
];
export const dataCaiTaoSuaChuaCongTrinh: AboutListChild[] = [
  { title: "Sửa chữa, bảo dưỡng hệ thống điều hoà, không khí", des: "Cung cấp dịch vụ sửa chữa và bảo dưỡng hệ điều hòa không khí, giúp tối ưu hiệu suất làm lạnh và tiết kiệm năng lượng. Ngoài ra, dịch vụ còn xử lý các vấn đề liên quan đến mùi hôi và chất lượng không khí trong nhà, đảm bảo không gian sống luôn trong lành và thoải mái. Cam kết khắc phục nhanh chóng các sự cố và thực hiện bảo trì định kỳ để hệ thống hoạt động ổn định, bền lâu và duy trì môi trường sống tối ưu cho gia đình bạn",slug: "sua-chua-cai-tao-cong-trinh",icon: ThiCong },
  { title: "Sửa chữa điện nước", des: "Dịch vụ sửa chữa điện nước bao gồm cải tạo và lắp đặt hệ thống an ninh, giúp bảo vệ an toàn cho ngôi nhà. Chuyên sửa chữa hệ thống điện, khắc phục sự cố và nâng cấp các thiết bị điện. Bên cạnh đó, dịch vụ cũng lắp đặt và sửa chữa hệ thống thông minh trong nhà, nâng cao tiện nghi và hiện đại hóa không gian sống. Ngoài ra, còn có dịch vụ thông cống, xử lý tắc nghẽn các đường ống, cùng với sửa chữa hệ thống đường ống nước, van, bồn cầu và vòi sen, đảm bảo hệ thống hoạt động ổn định và thuận tiện cho sinh hoạt hàng ngày.",slug: "sua-chua-cai-tao-cong-trinh",icon: ThiCong },
  { title: "Chống thấm và xử lý độ ẩm", des: "Đưa ra các giải pháp chống thấm toàn diện, bảo vệ công trình khỏi sự tấn công của nước, độ ẩm và mưa. Với quy trình kiểm tra kỹ lưỡng, phát hiện chính xác các điểm yếu, chúng tôi thực hiện xử lý triệt để các khu vực dễ bị thấm dột, giúp công trình luôn khô ráo, bền bỉ và duy trì độ bền lâu dài.",slug: "sua-chua-cai-tao-cong-trinh",icon: ThiCong },
  { title: "Cải tạo mặt tiền, nội thất, ngoại thất và cảnh quan", des: "Cải tạo toàn diện là phương châm của Đại Tiến Phát Group, bao gồm tân trang bề mặt tường, sàn, và nâng cấp thiết bị nội thất để tạo ra không gian sống mới mẻ, hiện đại và tiện nghi. Dịch vụ còn bao gồm việc sơn sửa tường ngoài, thay cửa, cổng, giúp công trình trở nên khang trang và bắt mắt hơn. Đồng thời, cải tạo sân vườn và lối đi sẽ mang lại không gian ngoại thất đẹp mắt, hài hòa, nâng cao giá trị thẩm mỹ và công năng cho ngôi nhà của bạn..",slug: "sua-chua-cai-tao-cong-trinh",icon: ThiCong },
  { title: "Cách âm, cách nhiệt", des: "Đại Tiến Phát Group tự hào cung cấp giải pháp cách âm, cách nhiệt hiện đại và hiệu quả cho mọi công trình. Với công nghệ tiên tiến và nguyên vật liệu chất lượng cao, chúng tôi mang đến khả năng giảm thiểu tiếng ồn và điều hòa nhiệt độ tối ưu, giúp không gian sống và làm việc trở nên thoải mái hơn. Đội ngũ chuyên gia giàu kinh nghiệm của Đại Tiến Phát luôn sẵn sàng tư vấn và thi công, đảm bảo đáp ứng nhu cầu đa dạng của khách hàng một cách chuyên nghiệp và bền vững",slug: "sua-chua-cai-tao-cong-trinh",icon: ThiCong },
  { title: "Cải tạo công trình phụ", des: "Đại Tiến Phát Group chuyên cung cấp các giải pháp thi công và hoàn thiện công trình phụ với chất lượng vượt trội. Từ nhà vệ sinh, nhà tắm đến các khu vực tiện ích khác, chúng tôi cam kết mang lại sự tiện nghi, bền bỉ và thẩm mỹ cao cho mọi dự án. Với kinh nghiệm lâu năm và đội ngũ thi công chuyên nghiệp, Đại Tiến Phát luôn đảm bảo tiến độ và chất lượng, đáp ứng mọi yêu cầu khắt khe của khách hàng." ,slug: "sua-chua-cai-tao-cong-trinh",icon: ThiCong},
];
export const dataCongTrinhDanDungVaCongNghiep: AboutListChild[] = [
  { title: "Thi công nhà thép cho nhà xưởng, kho bãi", des: "Đề xuất giải pháp tối ưu về kết cấu và không gian sử dụng. Với kỹ thuật thi công chính xác, các công trình của chúng tôi đảm bảo tính bền vững, an toàn và hiệu quả chi phí. Phù hợp với nhu cầu lưu trữ và sản xuất của doanh nghiệp.", slug: "cong-trinh-dan-dung-va-cong-nghiep",icon: NhaThep },
  { title: "Thi công nhà thép cho công trình công nghiệp", des: "Chúng tôi cung cấp dịch vụ thi công nhà thép từ nhà máy sản xuất đến các khu vực lưu trữ và gia công. Các công trình được thi công với độ chính xác cao, đáp ứng các yêu cầu về kỹ thuật và an toàn, mang lại hiệu quả lâu dài cho các doanh nghiệp.",slug: "cong-trinh-dan-dung-va-cong-nghiep",icon: NhaThep },
  { title: "Thi công nhà thép cho công trình dân dụng", des: "Các công trình dân dụng như nhà ở, văn phòng và công trình thương mại mà Đại Tiến Phát Group thực hiện được xây dựng bằng nhà thép, mang đến sự linh hoạt, tốc độ thi công nhanh chóng và hiệu quả về chi phí. Nhà thép không chỉ đảm bảo tính bền bỉ và hiện đại mà còn tối ưu hóa chi phí, là giải pháp lý tưởng cho các công trình dân dụng.",slug: "cong-trinh-dan-dung-va-cong-nghiep",icon: NhaThep },
  { title: "Thi công nhà thép cho công trình thể thao và giải trí", des: "Sân vận động, nhà thi đấu, khu vui chơi giải trí và các cơ sở hạ tầng thể thao ngoài trời. Các công trình này của chúng tôi được thiết kế, đảm bảo sự bền vững, an toàn và khả năng chịu lực tốt, đồng thời tối ưu hóa không gian sử dụng và khả năng vận hành. Chúng tôi cam kết mang đến những công trình chất lượng cao, thỏa mãn mọi yêu cầu khắt khe của các hoạt động thể thao và giải trí quy mô lớn.",slug: "cong-trinh-dan-dung-va-cong-nghiep",icon: NhaThep },
];
