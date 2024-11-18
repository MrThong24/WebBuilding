export default function SectionTongQuan() {
  return (
    <div className="bg-white lg:max-w-full overflow-hidden flex flex-col justify-center">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-4 ">
          Tổng quan
        </h3>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-green-600">
                Tên công ty
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Công ty TNHH Đầu tư Xây Dựng Đại Tiến Phát.
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-green-600">Địa chỉ</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                222 Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng 550000, Vietnam
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-green-600">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                daitienphatgroup@gmail.com
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-green-600">Điện thoại</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                0905 519 995 – 0395 124 140.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
