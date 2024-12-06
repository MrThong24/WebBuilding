import Image from "next/image";
import CongTrinhDanDung from "../../assest/image/CongTrinhDanDung.png";

export default function SectionThiCongCongTrinhDanDung() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-[var(--thm-base-color-rgb)] mb-6 text-center uppercase">
          Thi công công trình dân dụng
        </h2>
        {/* <Image
          alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
          src={CongTrinhDanDung}
          className="rounded-2xl w-full h-[400px]"
        /> */}
        <h2 className="text-[16px] font-bold text-black mb-2 mt-4">
          1. Kiến tạo không gian sống và thương mại hiện đại
        </h2>
        <p className="text-gray-800 text-sm leading-6">
          Trong lĩnh vực thi công công trình dân dụng, DTP luôn đặt chất lượng
          và sự hài lòng của khách hàng lên hàng đầu. Chúng tôi đã và đang thực
          hiện thành công nhiều dự án nhà ở, trung tâm thương mại và showroom,
          góp phần nâng cao chất lượng cuộc sống và hiệu quả kinh doanh.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-black mb-2">
          2. Dịch vụ chính:
        </h2>
        <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
          <li>
            <span className="text-gray-800">Thi công nhà ở: </span>
            Xây dựng những ngôi nhà tiện nghi, bền vững, phù hợp với nhu cầu
            sinh hoạt của từng gia đình.
          </li>
          <li>
            <span className="text-gray-800">
              Thi công trung tâm thương mại:{" "}
            </span>
            Tạo nên các không gian kinh doanh hiện đại, thân thiện với khách
            hàng.
          </li>
          <li>
            <span className="text-gray-800">Thi công showroom: </span>
            Đảm bảo mỗi thiết kế đều làm nổi bật thương hiệu và sản phẩm của
            khách hàng.
          </li>
        </ul>
        <div className="mt-4">
          <h2 className="text-[16px] font-bold text-black mb-2">
            3. Lý do lựa chọn DTP:
          </h2>
          <ul className="list-disc list-inside text-gray-800 text-sm leading-6">
            <li>
              <span className="text-gray-800">Kinh nghiệm dày dạn: </span>
              Nhiều năm kinh nghiệm trong thi công các dự án quy mô lớn nhỏ.
            </li>
            <li>
              <span className="text-gray-800">Đảm bảo chất lượng: </span>
              Cam kết sử dụng các phương pháp thi công hiện đại để mang lại sự
              bền vững và an toàn.
            </li>
            <li>
              <span className="text-gray-800">Đội ngũ tận tâm: </span>
              Đội ngũ kỹ sư và công nhân luôn sẵn sàng đáp ứng mọi yêu cầu của
              khách hàng.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
