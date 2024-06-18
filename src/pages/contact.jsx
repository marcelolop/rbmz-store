import React from "react";
import { motion } from "framer-motion";

import ContactForm from "../components/contact/Form";
import Map from "../components/contact/Map";
import Hero from "../components/contact/Hero";
import Links from "../components/contact/Links";

const Contact = () => {
  const latitude = 49.839462;
  const longitude = -97.152575;

  return (
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
        <section className="w-full h-screen text-center flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-start justify-start w-full h-full">
            {/* Aside - Give Us a Call */}
            <aside className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 rounded-md p-20 h-full">
              <Links />
            </aside>

            {/* Contact Form */}
            <div className="mx-auto max-w-3xl h-screen md:w-2/3 lg:w-3/4 md:pl-4 p-4 flex items-center justify-center">
              <div className="w-full mx-auto rounded-lg p-8 flex flex-col items-center justify-center h-full">
                <p className="text-xl mb-8">
                  Connect with us anytime – we're here to assist you with any
                  questions
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="w-full text-center bg-blue-200 pt-20 pb-20 ">
          <h2 className="text-3xl text-gray-600 font-bold mb-12">
            Our Location
          </h2>
          <Map latitude={latitude} longitude={longitude} />
        </section>
      </section>
    </motion.div>
  );
};

export default Contact;
