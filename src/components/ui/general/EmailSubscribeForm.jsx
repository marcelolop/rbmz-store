import React from "react";

function EmailSubscribeForm() {
  return (
    <form className="flex items-center w-full max-w-3xl">
      <span className="text-gray-500 mr-4">Subscribe to our newsletter</span>
      <div className="w-0.5 h-6 bg-gray-300 mr-4"></div>
      <div className="flex items-center flex-auto bg-white rounded-full shadow-md overflow-hidden shadow-3d">
        <input
          type="text"
          className="px-4 py-2 flex-grow text-black bg-white placeholder-slate-400 focus:outline-none rounded-l-full"
          placeholder="Your email"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white border-none px-4 py-2 rounded-full"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default EmailSubscribeForm;