import React from "react";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-gradient-to-br from-[#2c2c2c] to-[#27c200] bg-center bg-no-repeat py-10 md:min-h-[472px]"
      style={{
        backgroundImage:
          'url("https://assets3.razerzone.com/u3hgiLFD55R_u8BRs5_hssaz_EQ=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd7%2Fhbe%2F9206380953630%2FRSL10-blackwidow-v3-mini-hyperspeed-phantom-1500x1000-4.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-55"></div>
      <div className="relative max-w-screen-lg mx-auto py-6 md:py-10 px-4 flex justify-center items-center">
        <div className="grid content-center grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-6 flex flex-col items-center text-white">
            <img
              src="https://1000logos.net/wp-content/uploads/2019/09/Razer-logo-500x300.png"
              alt="Razer Logo"
              className="mb-4 w-1/2 h-auto" />
            <img
              src="https://logos-world.net/wp-content/uploads/2020/11/Razer-Logo-700x394.png"
              alt="Razer Logo"
              className="mb-4 w-1/2 h-auto"
            />
            <div className="p-4 rounded flex flex-col items-center justify-center text-white">

              <h2 className="text-[#27c200] mb-2 text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                Keyboards
              </h2>
              <div className="flex flex-col items-center gap-3 mt-6">
                <p className="text-lg text-center">The best keyboards for gaming</p>
                <Link
                  to="/products/category/3/subcategory/2"
                  className="bg-[#27c200] hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 transition-colors duration-300"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;