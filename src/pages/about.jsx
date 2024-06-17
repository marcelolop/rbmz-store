import React from "react";

function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        We are a dedicated team committed to providing the best products and services.
      </p>
      <h2 className="text-xl font-bold mb-2">Our Team</h2>
      <ul className="mb-4 space-y-2">
        <li>
          <strong className="block text-xs font-medium uppercase text-gray-400">John Doe</strong>
          <span className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500">CEO</span>
        </li>
        <li>
          <strong className="block text-xs font-medium uppercase text-gray-400">Jane Smith</strong>
          <span className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500">CTO</span>
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Our Projects</h2>
      <ul className="mb-4 space-y-2">
        <li>
          <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            Project 1
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            Project 2
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;