import { dataDuAnDaThucHien } from "../mockData";

export default function SectionLichSu() {
  return (
    <div className="bg-white lg:max-w-full overflow-hidden flex flex-col justify-center">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Lịch sử
        </h3>
        <p className="text-black text-sm">Được thành lập năm 2024</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Các dự án lớn đã thực hiện
        </h3>
        <div className="flex flex-wrap gap-y-8 gap-x-6 justify-center text-lg">
          {dataDuAnDaThucHien?.map((item) => (
            <div
              key={item?.title}
              className="bg-gray-100/50 shadow flex-grow font-medium text-[14px] text-black border-l-8 border-red-600 rounded-md px-3 py-2 w-full md:w-5/12"
            >
              {item?.title}
              <div className="text-gray-500 text-[12px] pt-1">{item?.des}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
