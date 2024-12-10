import { StaticImageData } from "next/image";
import a1_project1 from "../../assest/image/projects/project_1/a1.jpg";

     export interface Project {
  id: number;
  title: string;
  img: string | StaticImageData;
  type: string;
  col: number;
  slug: string;
  location: string;
  time: string;
  des: string;
  content: string;
}

export const listProject: Project[] = [
  
  {
    id: 1,
    title: "Thi công sân Pickleball",
    img: a1_project1,
    type: "san-choi-the-thao",
    col: 3,
    slug: "thi-cong-san-pickleball", 
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    des: "Thi công hoàn thiện nội thất",
    content: "<h1 class=\"entry-title\" style=\"box-sizing: border-box; color: rgb(51, 51, 51); width: 1222.5px; margin-top: 0px; margin-bottom: 0.5em; text-rendering: optimizespeed; line-height: 1; font-family: &quot;Open Sans&quot;, sans-serif; font-weight: 700; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 1.7em;\">Thi Công Sân Pickleball – Giải Pháp Hoàn Hảo Cho Không Gian Thể Thao Hiện Đại</h1><p><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: medium;\"><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: medium;\"><strong style=\"color: rgb(55, 52, 52);\">Pickleball</strong> – môn thể thao kết hợp giữa tennis, cầu lông và bóng bàn – đang trở thành một xu hướng không thể bỏ qua tại nhiều quốc gia trên thế giới. Để đáp ứng nhu cầu ngày càng cao về các sân chơi thể thao hiện đại, <span style=\"color: rgb(67, 67, 67);\"><strong style=\"color: rgb(33, 33, 33);\">Đại Tiến Phát</strong></span> tự hào là đơn vị cung cấp giải pháp thi công sân pickleball chất lượng cao, tuân thủ tiêu chuẩn quốc tế, mang lại không gian thể thao lý tưởng cho mọi người chơi.</span></span></p><p><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: medium;\"><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: medium;\"><br></span></span></p><h1 class=\"entry-title\" style=\"box-sizing: border-box; color: rgb(51, 51, 51); width: 1109px; margin-top: 0px; margin-bottom: 0.5em; text-rendering: optimizespeed; font-size: 1.7em; line-height: 1.3; font-family: &quot;Open Sans&quot;, sans-serif; font-weight: 700; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Pickleball - Môn thể thao dành cho mọi đối tượng</h1><p><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Pickleball không chỉ thu hút giới trẻ mà còn phù hợp với mọi lứa tuổi nhờ vào luật chơi đơn giản và không yêu cầu quá nhiều thể lực. Chính vì vậy, sân pickleball là một lựa chọn lý tưởng cho các khu nghỉ dưỡng, trung tâm thể thao, cũng như các khu đô thị hiện đại, giúp tạo điểm nhấn độc đáo và mang lại giá trị lâu dài cho cộng đồng.</span></p><p>Pickleball - Pickleball - </p>"
  },
];
