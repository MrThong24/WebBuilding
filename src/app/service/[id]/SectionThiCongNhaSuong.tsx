import Image from "next/image";
import ThiCongNhaSuong from "../../assest/image/ThiCongNhaSuong.jpg";

export default function SectionThiCongNhaSuong() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-[var(--thm-base-color-rgb)] mb-6 text-center uppercase">
          Thi công nhà xưởng công nghiệp
        </h2>
        <div className="flex justify-center">
          <Image
            alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
            src={ThiCongNhaSuong}
            className="rounded-2xl w-full h-[400px] object-cover"
          />
        </div>

        <h2 className="text-[16px] font-bold text-black mb-2 mt-4">
          1. Xây dựng nền tảng vững chắc cho các hoạt động sản xuất
        </h2>
        <p className="text-gray-800 text-sm leading-6">
          DTP là đối tác tin cậy trong lĩnh vực thi công nhà xưởng công nghiệp.
          Chúng tôi hiểu rằng mỗi ngành công nghiệp đều có những yêu cầu đặc thù
          về không gian và cơ sở hạ tầng. Vì vậy, các giải pháp của chúng tôi
          luôn được tùy chỉnh để đáp ứng tối đa nhu cầu sản xuất và vận hành của
          khách hàng.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-black mb-2">
          2. Dịch vụ chính
        </h2>
        <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
          <li>
            <span className="text-gray-800">
              Thi công nhà xưởng sản xuất :{" "}
            </span>
            Xây dựng không gian tối ưu hóa quy trình sản xuất, tiết kiệm chi phí
            vận hành.
          </li>
          <li>
            <span className="text-gray-800">Thi công nhà kho: </span>
            Đảm bảo an toàn lưu trữ hàng hóa với hệ thống kết cấu chắc chắn,
            chịu lực tốt.
          </li>
          <li>
            <span className="text-gray-800">
              Thi công hệ thống văn phòng trong khu công nghiệp:{" "}
            </span>
            Tích hợp giữa không gian làm việc và sản xuất, thuận tiện cho việc
            quản lý và vận hành.
          </li>
        </ul>
        <div className="mt-4">
          <h2 className="text-[16px] font-bold text-black mb-2">
            3. Cam kết từ DTP
          </h2>
          <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
            <li>
              <span className="text-gray-800">Đảm bảo an toàn: </span>
              Tuân thủ nghiêm ngặt các tiêu chuẩn an toàn lao động và xây dựng.
            </li>
            <li>
              <span className="text-gray-800">Công nghệ hiện đại: </span>
              Ứng dụng công nghệ tiên tiến để tăng độ chính xác và hiệu quả thi
              công.
            </li>
            <li>
              <span className="text-gray-800">Tối ưu chi phí: </span>
              Cân đối chi phí để mang lại giá trị cao nhất cho khách hàng.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
