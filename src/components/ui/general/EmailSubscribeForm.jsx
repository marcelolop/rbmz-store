import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function EmailSubscribeForm() {
  const emailRef = useRef();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        recipient: email
      });
      setMessage("Thank you for subscribing!");
      setEmail('');
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (

    <>
      <form className="flex items-center w-full max-w-3xl" onSubmit={handleSubmit}>
        <span className="text-gray-500 mr-4">Subscribe to our newsletter</span>
        <div className="w-0.5 h-6 bg-gray-300 mr-4"></div>
        <div className="flex items-center flex-auto overflow-hidden">
          <input
            type="email"
            className="px-4 py-2 flex-grow text-black bg-transparent placeholder-gray-400 focus:outline-none border-b border-gray-200 transition-colors duration-200 focus:border-blue-500"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white border-none px-4 py-2 rounded-md ml-5 mt-2"
          >
            Subscribe
          </button>
        </div>
      </form>
      {message && <div className="ml-4 text-green-500 mt-2">{message}</div>}
    </>
  );
}

export default EmailSubscribeForm;