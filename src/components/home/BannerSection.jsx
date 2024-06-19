import React from "react";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section className="relative grid items-center bg-cover bg-center bg-no-repeat py-10 md:min-h-[472px]" 
             style={{ backgroundImage: "url('https://resource.logitech.com/w_1800,h_472,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/plp/keyboards/cross-sell-keyboards-desktop.jpg')" }}>
      <div className="max-width-padding py-6 md:py-10 relative">
        <div className="grid gap md:grid-cols-8 lg:grid-cols-12">
          <div className="grid content-center gap-2 md:col-start-5 md:col-span-4 lg:col-start-8 lg:col-span-4 text-right">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Keyboards</h2>
                      <div className="flex flex-wrap gap-3 mt-6 justify-start">
                          <p className="text-gray-500">The best keyboards for gaming</p>
              <Link to="/products/category/3/subcategory/2" className="btn-solid-light bg-green-500 text-white py-2 px-4 rounded">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;