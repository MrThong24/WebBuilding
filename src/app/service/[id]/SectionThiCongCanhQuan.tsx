import Image from "next/image";
import ThiCongNhaSuong from "../../assest/image/ThiCongNhaSuong.jpg";

export default function SectionThiCongCanhQuan() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-[var(--thm-base-color-rgb)] mb-6 text-center uppercase">
          Thi công cảnh quan
        </h2>
        {/* <Image
          alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
          src={ThiCongNhaSuong}
          className="rounded-2xl"
        /> */}
        <h2 className="text-[16px] font-bold text-black mb-2 mt-4">
          1. Mang thiên nhiên đến gần hơn với cuộc sống
        </h2>
        <p className="text-gray-800 text-sm leading-6">
          Cảnh quan không chỉ là một phần của công trình mà còn là yếu tố giúp
          nâng cao giá trị sống. Với dịch vụ thi công cảnh quan, DTP tạo nên
          những không gian xanh mát, hài hòa với thiên nhiên, đồng thời tối ưu
          hóa giá trị sử dụng.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-black mb-2">
          2. Dịch vụ chính:
        </h2>
        <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
          <li>
            <span className="text-gray-800">
              Thiết kế và thi công sân vườn:{" "}
            </span>
            Tạo nên không gian thư giãn và thân thiện với môi trường.
          </li>
          <li>
            <span className="text-gray-800">Thi công công viên mini: </span>
            Mang đến khu vực sinh hoạt chung đầy tiện nghi và xanh mát.
          </li>
          <li>
            <span className="text-gray-800">Cải tạo cảnh quan: </span>
            Làm mới không gian cũ, mang lại diện mạo mới mẻ và hấp dẫn hơn.
          </li>
        </ul>
        <div className="mt-4">
          <h2 className="text-[16px] font-bold text-black mb-2">
            3. Điểm nhấn:
          </h2>
          <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
            <li>
              <span className="text-gray-800">Sáng tạo: </span>
              Kết hợp nghệ thuật và kỹ thuật để tạo nên những thiết kế cảnh quan
              độc đáo.
            </li>
            <li>
              <span className="text-gray-800">Bền vững: </span>
              Sử dụng các giải pháp xanh, thân thiện với môi trường.
            </li>
            <li>
              <span className="text-gray-800">Đồng hành: </span>
              Tư vấn và hỗ trợ khách hàng trong quá trình bảo trì cảnh quan.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
