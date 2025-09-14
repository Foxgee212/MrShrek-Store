import React from "react";

function HeroBanner() {
  return (
    <div className="relative">
      <img
        src={`${import.meta.env.BASE_URL} Iphones/iphone-14-pro-max.jpg`}
        alt="Promo Banner"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Super Deals Everyday!</h2>
      </div>
    </div>
  );
}
export default HeroBanner;