import React from "react";
import { Link } from "react-router-dom";
import EmailSubscribeForm from "../ui/general/EmailSubscribeForm.jsx";

function Footer() {
  return (
    <footer className=" bg-slate-300 p-8 w-full shadow-slate-200 shadow flex flex-col justify-between">
      <div className="flex justify-center items-start gap-[200px]">
        <div className="flex items-center">
          <a
            className="text-[50px] font-bold text-black hover:text-blue-500 transition-colors duration-500"
            href="/"
          >
          <Link className="text-black" to="/">Logo</Link>
          </a>
        </div>
        <div className="flex space-x-16">
          <div>
            <h3 className="text-black font-bold mb-2">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  Discounts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-bold mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-bold mb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
                  href="/"
                >
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full flex justify-center">
        <EmailSubscribeForm />
      </div>
    </footer>
  );
}

export default Footer;
