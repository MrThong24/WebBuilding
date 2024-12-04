import Image from "next/image";
import CaiTao_1 from "../../assest/image/CaiTao1.jpg";
import CaiTao_2 from "../../assest/image/CaiTao2.jpg";

export default function SectionCaiTao() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-[var(--thm-base-color-rgb)] mb-6 text-center uppercase">
          Cải tạo – Nâng cấp – Sửa chữa công trình
        </h2>

        <div className="flex gap-2">
          <Image
            alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
            src={CaiTao_1}
            className=" flex-[0.5] w-[50%]"
          />
          <Image
            alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
            src={CaiTao_2}
            className=" flex-[0.5] w-[50%]"
          />
        </div>
        <h2 className="text-[16px] font-bold text-black mb-2 mt-4">
          1. Mang lại diện mạo mới, gia tăng giá trị sử dụng
        </h2>
        <p className="text-gray-800 text-sm leading-6">
          Công trình của bạn cần được nâng cấp hoặc sửa chữa? Hãy để DTP giúp
          bạn! Chúng tôi cung cấp dịch vụ cải tạo, nâng cấp và sửa chữa toàn
          diện, giúp khôi phục và nâng cao giá trị của công trình.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-black mb-2">
          2. Dịch vụ chính:
        </h2>
        <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
          <li>
            <span className="text-gray-800">Cải tạo không gian nội thất: </span>
            Mang lại sự tươi mới và tiện nghi cho không gian sống và làm việc.
          </li>
          <li>
            <span className="text-gray-800">Nâng cấp hệ thống kỹ thuật: </span>
            Đáp ứng các tiêu chuẩn hiện đại, nâng cao hiệu quả sử dụng.
          </li>
          <li>
            <span className="text-gray-800">
              Sửa chữa các hạng mục công trình:{" "}
            </span>
            Khắc phục mọi sự cố nhanh chóng, đảm bảo an toàn và bền vững.
          </li>
        </ul>
        <div className="mt-4">
          <h2 className="text-[16px] font-bold text-black mb-2">3. Cam kết:</h2>
          <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
            <li>
              <span className="text-gray-800">Chất lượng hàng đầu: </span>
              Đảm bảo mỗi dự án cải tạo đều đạt chất lượng tối ưu.
            </li>
            <li>
              <span className="text-gray-800">Thẩm mỹ cao: </span>
              Kết hợp giữa cải tạo và sáng tạo để tạo nên không gian mới mẻ.
            </li>
            <li>
              <span className="text-gray-800">Tiến độ nhanh: </span>
              Hoàn thành đúng thời gian cam kết, không làm gián đoạn kế hoạch
              của khách hàng.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
