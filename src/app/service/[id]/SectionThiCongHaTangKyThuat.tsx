import Image from "next/image";
import ThiCongNhaSuong from "../../assest/image/ThiCongNhaSuong.jpg";

export default function SectionThiCongHaTangKyThuat() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-[var(--thm-base-color-rgb)] mb-6 text-center uppercase">
          Thi công hạ tầng kỹ thuật, cấp thoát nước
        </h2>
        {/* <Image
          alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
          src={ThiCongNhaSuong}
          className="rounded-2xl"
        /> */}
        <h2 className="text-[16px] font-bold text-black mb-2 mt-4">
          1. Đặt nền móng vững chắc cho sự phát triển bền vững
        </h2>
        <p className="text-gray-800 text-sm leading-6">
          Hạ tầng kỹ thuật và hệ thống cấp thoát nước là yếu tố quyết định đến
          sự bền vững và hiệu quả của một công trình. Tại DTP, chúng tôi cung
          cấp các giải pháp toàn diện trong lĩnh vực này, mang lại sự an tâm
          tuyệt đối cho khách hàng.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-black mb-2">
          2. Dịch vụ chính:
        </h2>
        <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
          <li>
            <span className="text-gray-800">
              Thi công hệ thống cấp thoát nước:{" "}
            </span>
            Đảm bảo vận hành ổn định, không xảy ra tình trạng ngập úng hay ô
            nhiễm.
          </li>
          <li>
            <span className="text-gray-800">Xây dựng đường nội bộ: </span>
            Tạo điều kiện thuận lợi cho giao thông và vận chuyển.
          </li>
          <li>
            <span className="text-gray-800">
              Thi công hàng rào và công trình phụ trợ:{" "}
            </span>
            Tăng cường an ninh và thẩm mỹ cho công trình.
          </li>
        </ul>
        <div className="mt-4">
          <h2 className="text-[16px] font-bold text-black mb-2">
            3. Lợi ích khi chọn DTP:
          </h2>
          <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
            <li>
              <span className="text-gray-800">Kỹ thuật tiên tiến: </span>
              Ứng dụng công nghệ hiện đại để tăng hiệu quả thi công.
            </li>
            <li>
              <span className="text-gray-800">Chi phí hợp lý: </span>
              Tối ưu hóa chi phí mà vẫn đảm bảo chất lượng vượt trội.
            </li>
            <li>
              <span className="text-gray-800">Đội ngũ chuyên nghiệp: </span>
              Cam kết thực hiện đúng tiến độ và chất lượng theo yêu cầu.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
