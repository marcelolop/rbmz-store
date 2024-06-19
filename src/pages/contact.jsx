import React from "react";
import { motion } from "framer-motion";

import Hero from "../components/contact/Hero";
import Aside from "../components/contact/Aside";
import ContactForm from "../components/contact/Form";
import Links from "../components/contact/Links";
import Map from "../components/contact/Map";

const Contact = () => {
  const latitude = 49.839462;
  const longitude = -97.152575;

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section className="h-full">
        <section className="hero-section">
          <Hero />
        </section>

        {/* Contact Section */}
        <section className="w-full bg-gradient-to-b from-white to-blue-100 h-screen text-center flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-start justify-start w-full h-full">
           <Aside />

            {/* Contact Form */}
            <div className="mx-auto max-w-3xl h-screen md:w-1/3 lg:w-2/4 md:pl-4 p-4 flex items-center justify-center">
              <div className="w-full mx-auto rounded-lg p-8 flex flex-col items-center justify-center h-full">
                <p className="text-2xl mb-8 text-balance">
                  Connect with us anytime – we're here to assist you with any
                  questions
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

         {/* Links */}
         <section className="w-screen h-full bg-blue-800 flex items-center justify-center p-20">
         <Links />
         </section>


        {/* Location Section */}
        <section className="w-full text-centerpt-20 p-20 ">
          <h2 className="text-3xl text-gray-600 font-bold mb-12 text-center">
            Our Location
          </h2>
          <Map latitude={latitude} longitude={longitude} />
        </section>
      </section>
    </motion.div>
    </>
  );
};

export default Contact;