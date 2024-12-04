import Image from "next/image";
import ThiCongHoanThien from "../../assest/image/ThiCongHoanThien.jpg";
import ThiCongHoanThien_2 from "../../assest/image/ThiCongHoanThien_2.jpg";

export default function SectionThiCongHoanThien() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-[var(--thm-base-color-rgb)] mb-6 text-center uppercase">
          Thi công hoàn thiên nội thất
        </h2>
        <div className="flex gap-2">
          <Image
            alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
            src={ThiCongHoanThien}
            className=" flex-[0.5] w-[50%]"
          />
          <Image
            alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
            src={ThiCongHoanThien_2}
            className=" flex-[0.5] w-[50%]"
          />
        </div>
        <h2 className="text-[16px] font-bold text-black mb-2 mt-4">
          1. Tạo nên không gian sống và làm việc đẳng cấp
        </h2>
        <p className="text-gray-800 text-sm leading-6">
          Công ty TNHH Đầu Tư Phát Triển Xây Dựng Đại Tiến Phát (DTP) tự hào là
          đơn vị tiên phong trong việc cung cấp dịch vụ thi công hoàn thiện nội
          thất chuyên sâu, phù hợp với nhiều loại hình công trình như biệt thự,
          nhà phố, nhà hàng và showroom. Chúng tôi không chỉ đơn thuần thi công
          mà còn là người đồng hành cùng khách hàng, biến những ý tưởng thiết kế
          thành hiện thực, mang lại không gian sống và làm việc tối ưu về công
          năng và thẩm mỹ.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-black mb-2">
          2. Dịch vụ chính
        </h2>
        <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
          <li>
            <span className="text-gray-800">Thi công nội thất biệt thự : </span>
            Tạo nên không gian sang trọng, tinh tế với các vật liệu cao cấp và
            phong cách thiết kế hiện đại.
          </li>
          <li>
            <span className="text-gray-800">Thi công nội thất nhà phố: </span>
            Đáp ứng nhu cầu thẩm mỹ và tiện nghi cho gia đình với các giải pháp
            không gian tối ưu.
          </li>
          <li>
            <span className="text-gray-800">Thi công nội thất nhà hàng: </span>
            Tạo dựng không gian thu hút, phù hợp với đặc trưng của từng mô hình
            kinh doanh.
          </li>
          <li>
            <span className="text-gray-800">Thi công nội thất showroom: </span>
            Tối ưu hóa không gian trưng bày, làm nổi bật sản phẩm và thương
            hiệu.
          </li>
        </ul>
        <div className="mt-4">
          <h2 className="text-[16px] font-bold text-black mb-2">
            3. Điểm mạnh
          </h2>
          <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
            <li>
              <span className="text-gray-800">Đội ngũ chuyên gia: </span>
              Các kỹ sư và thợ thi công giàu kinh nghiệm, chuyên môn cao.
            </li>
            <li>
              <span className="text-gray-800">Vật liệu chất lượng: </span>
              Chúng tôi sử dụng các vật liệu nội thất cao cấp, đáp ứng các tiêu
              chuẩn bền vững và an toàn.
            </li>
            <li>
              <span className="text-gray-800">Cam kết tiến độ: </span>
              Hoàn thiện đúng hạn, đảm bảo không làm ảnh hưởng đến kế hoạch kinh
              doanh của khách hàng.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
