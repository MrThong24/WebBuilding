import Image from "next/image";
import SoDoToChuc from "../../assest/image/about/logo-so-do-to-chuc-dai-tien-phat.jpg";
export default function SectionSoDoToChuc() {
  return (
    <div className="px-4 py-5 sm:px-6 flex justify-center">
      <Image
        alt="Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát" // Cập nhật thuộc tính alt
        src={SoDoToChuc}
      />
    </div>
  );
}
