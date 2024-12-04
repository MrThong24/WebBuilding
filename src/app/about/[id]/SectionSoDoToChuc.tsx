import Image from "next/image";
import SoDoToChuc from "../../assest/image/SoDoToChuc.jpg";
export default function SectionSoDoToChuc() {
  return (
    <div className="px-4 py-5 sm:px-6 flex justify-center">
      <Image
        alt="Logo Company" // Cập nhật thuộc tính alt
        src={SoDoToChuc}
      />
    </div>
  );
}
