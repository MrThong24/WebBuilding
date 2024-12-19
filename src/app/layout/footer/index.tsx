export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        clear: "both",
        width: "100%",
        position: "relative",
        background: "#232323 url('/images/footer.png') no-repeat",
        backgroundSize: "120% auto",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 max-w-full mx-auto sm:max-w-2xl lg:max-w-full">
          <div className="col-span-full lg:mb-10 max-lg:border-b max-lg:pb-8 lg:col-span-2 lg:max-w-full ">
            <h2 className="text-white mb-4 font-semibold text-[18px]">
              CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN XÂY DỰNG ĐẠI TIẾN PHÁT
            </h2>
            <div className="grid border-b border-white pb-4">
              <p className="text-white text-[14px]">ĐỊA CHỈ</p>
              <p className="text-white text-[14px]">
                Hòa Tiến - Hòa Vang - Đà Nẵng - Việt Nam
              </p>
            </div>
            <div className="grid border-b border-white py-4">
              <p className="text-white text-[14px]">VĂN PHÒNG CÔNG TY</p>
              <p className="text-white text-[14px]">
                222 Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng 550000, Vietnam
              </p>
            </div>
            <div className="grid py-4 gap-y-1">
              <div className="flex gap-x-8">
                <span className="text-white text-[14px] w-[80px]">
                  Điện thoại
                </span>
                <span className="text-white text-[14px]">
                  0905 519 995 – 0395 124 140
                </span>
              </div>
              <div className="flex gap-x-8">
                <span className="text-white text-[14px] w-[80px]">EMAIL</span>
                <span className="text-white text-[14px]">
                  daitienphatgroup@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="lg:mx-auto text-left">
            <h4 className="text-[16px] text-white font-medium mb-2">Tin tức</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2 text-[14px]">
                <a href="javascript:;" className="text-white ">
                  CDC Đà Nẵng được Bộ Y Tế thẩm định TKKT
                </a>
              </li>
              <li className="mb-2 text-[14px]">
                <a href="javascript:;" className=" text-white ">
                  CDC Đà Nẵng được Bộ Y Tế thẩm định TKKT
                </a>
              </li>
              <li className="mb-2 text-[14px]">
                <a href="javascript:;" className=" text-white ">
                  CDC Đà Nẵng được Bộ Y Tế thẩm định TKKT
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-white font-medium mb-7">
              Liên hệ với chúng tôi
            </h4>
            <div></div>
          </div>
        </div>
        {/*Grid*/}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center">
            <span className="text-sm text-white ">
              ©<a href="https://pagedone.io/">Copyright</a> 2024, Thiết kế bởi
              Công ty TNHH Đầu tư Phát triễn Xây dựng Đại Tiến Phát
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
