"use client"; // <===== REQUIRED

import { useState } from "react";

export default function MyApp() {
  return (
    <div className="pt-24 bg-white ">
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(27 49 71), rgba(179, 205, 209, 0.5))",
          }}
        ></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center p-6">
          <p className="text-white text-3xl font-semibold">
            Trung Tâm Thương Mại AEON MALL Huế
          </p>
        </div>
        <img
          className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          src="https://wallpaperaccess.com/full/508840.jpg"
          alt="about Us image"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10 grid md:grid-cols-2 grid-cols-1 gap-4 mt-16"></div>
    </div>
  );
}
