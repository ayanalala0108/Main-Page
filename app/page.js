"use client";
import { useState } from "react";
import MyApp from "./app";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start mx-4 md:mx-[150px] relative font-sans">
      <div className="flex items-center mt-5 justify-between w-full">
        <div className="flex items-center">
          <span className="text-xl">🙏</span>
          <h1 className="ml-2 text-2xl font-semibold text-[#C1036D]">
            namaste
          </h1>

          {/* Dropdown Button 1 */}
          <div className="relative ml-6 group hidden md:block">
            <button className="flex items-center bg-transparent text-black font-bold">
              Products
              <span className="ml-1 transition-transform group-hover:transform group-hover:rotate-180">
                ^
              </span>
            </button>
            <div className="absolute left-0 mt-1 bg-white shadow-md rounded-lg border w-48 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Namaste
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Namaste Wholesale
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Namaste Startups
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Namaste X
                </li>
              </ul>
            </div>
          </div>

          {/* Dropdown Button 2 */}
          <div className="relative ml-6 group hidden md:block">
            <button className="flex items-center bg-transparent text-black font-bold">
              Solutions
              <span className="ml-1 transition-transform group-hover:transform group-hover:rotate-180">
                ^
              </span>
            </button>
            <div className="absolute left-0 mt-1 bg-white shadow-md rounded-lg border w-48 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Wholesale Commerce
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Hyperlocal Commerce
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Influencers Commerce
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Headless Commerce
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black text-lg"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Login and Signup Buttons */}
        <div className="absolute top-4 right-4 hidden md:flex space-x-2">
          <button className="border bg-[#F5F3FF] text-[#7C3AED] px-4 py-2 rounded -500  transition">
            Login
          </button>
          <button className="border bg-[#7C3AED]  text-white px-4 py-2 rounded  transition">
            Signup
          </button>
        </div>
      </div>

      {/* Responsive Menu for small screens */}
      {isMenuOpen && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden">
          <div className="relative group">
            <button className="flex items-center bg-transparent text-black font-bold">
              Products
              <span className="ml-1 transition-transform group-hover:transform group-hover:rotate-180">
                ^
              </span>
            </button>
            <div className="absolute left-0 mt-1 bg-white shadow-md rounded-lg border w-48 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Namaste
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Namaste Wholesale
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Namaste Startups
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Namaste X
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center bg-transparent text-black font-bold">
              Solutions
              <span className="ml-1 transition-transform group-hover:transform group-hover:rotate-180">
                ^
              </span>
            </button>
            <div className="absolute left-0 mt-1 bg-white shadow-md rounded-lg border w-48 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Wholesale Commerce
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Hyperlocal Commerce
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Influencers Commerce
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                  Headless Commerce
                </li>
              </ul>
            </div>
          </div>

          <button className="border bg-[#F5F3FF] text-[#7C3AED] px-4 py-2 rounded transition">
            Login
          </button>
          <button className="border bg-[#7C3AED] text-white px-4 py-2 rounded transition">
            Signup
          </button>
        </div>
      )}

      {/* Space and Content Section */}
      <div className="mb-5 w-full flex flex-col md:flex-row items-start justify-between">
        <div className="flex-1 mt-20 pl-5">
          <h1 className="text-4xl md:text-5xl font-bold font-sans">
            The commerce platform for all types of businesses.
          </h1>
          <p className="mt-5 text-[#374151] text-lg font-sans">
            Empower your business with our comprehensive and scalable eCommerce
            platform. From startups to established enterprises, our platform
            enables businesses of all sizes to thrive in the world of eCommerce.
          </p>
          <button className="flex items-center bg-[#7C3AED] text-white px-8 py-2 rounded  hover:text-white transition mt-8">
            Get Started
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 mt-12">
          <img
            src="/img1.png"
            alt="Descriptive Alt Text"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Centered Heading and Sentence */}
      <div className="mt-10 flex justify-center w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold">For businesses of all sizes</h1>
          <p className="mt-2 text-[#111827]">
            We offer a range of features to fit your unique business needs.
          </p>
        </div>
      </div>
      {/* Three Blocks Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Block 1 */}
        <div className="flex flex-col items-center">
          <img src="/SMBs.png" alt="Feature 1" className="w-24 h-24 mb-2" />
          <h2 className="text-xl font-semibold">SMBs</h2>
          <p className="text-center text-[#374151]">
            Our Commerce platform is designed specifically to meet the needs of
            small and medium-sized businesses, providing enterprise-grade
            features at a fraction of the cost.
          </p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col items-center">
          <img
            src="/enterprises.png"
            alt="Feature 2"
            className="w-24 h-24 mb-2"
          />
          <h2 className="text-xl font-semibold">Enterprises</h2>
          <p className="text-center text-[#374151]">
            Our enterprise-level Commerce solutions offer unparalleled
            scalability, and customization, backed by expert consulting services
            to help you achieve your business goals.
          </p>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center">
          <img
            src="/d2cbrands.png"
            alt="Feature 3"
            className="w-24 h-24 mb-2"
          />
          <h2 className="text-xl font-semibold">D2C Brands</h2>
          <p className="text-center text-[#374151]">
            Tailored to meet the unique challenges faced by direct-to-consumer
            brands, with advanced eCommerce capabilities.
          </p>
        </div>
      </div>
      {/* Second Three Blocks Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Block 4 */}
        <div className="flex flex-col items-center">
          <img
            src="/socialcommerce.png"
            alt="Feature 3"
            className="w-24 h-24 mb-2"
          />
          <h2 className="text-xl font-semibold">Social Commerce</h2>
          <p className="text-center text-[#374151]">
            For Influencers or anyone who wants to sell their products on social
            media platforms like Facebook, Instagram and WhatsApp.
          </p>
        </div>
        {/* Block 5 */}
        <div className="flex flex-col items-center">
          <img src="/wb.png" alt="Feature 3" className="w-24 h-24 mb-2" />
          <h2 className="text-xl font-semibold">Wholesale Businesses</h2>
          <p className="text-center text-[#374151]">
            Our eCommerce platform provides a comprehensive set of tools for
            managing complex wholesale business workflows.
          </p>
        </div>
        {/* Block 6 */}
        <div className="flex flex-col items-center">
          <img src="/startups.png" alt="Feature 3" className="w-24 h-24 mb-2" />
          <h2 className="text-xl font-semibold">Startups</h2>
          <p className="text-center text-[#374151]">
            Our eCommerce platform provides a comprehensive set of tools for
            managing complex wholesale business workflows.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold">100K+ apps built</h1>
        </div>
      </div>
      {/* Scrollable Image Box */}
      <div className="mt-5 overflow-x-auto">
        <div className="flex items-center justify-between bg-white rounded-tl-lg rounded-tr-lg py-5 px-4">
          {/* Placeholder for the invisible upper and lower edges */}
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4 shadow-md rounded-lg">
          {/* Images go here */}
          <img src="/app1.png" alt="App 1" className="w-32 h-32 rounded-lg" />
          <img src="/app2.png" alt="App 2" className="w-32 h-32 rounded-lg" />
          <img src="/app3.png" alt="App 3" className="w-32 h-32 rounded-lg" />
          <img src="/app4.png" alt="App 4" className="w-32 h-32 rounded-lg" />
          <img src="/app5.png" alt="App 5" className="w-32 h-32 rounded-lg" />
          <img src="/app6.png" alt="App 6" className="w-32 h-32 rounded-lg" />
          <img src="/app7.png" alt="App 7" className="w-32 h-32 rounded-lg" />
          <img src="/app8.png" alt="App 8" className="w-32 h-32 rounded-lg" />
          <img src="/app9.png" alt="App 9" className="w-32 h-32 rounded-lg" />
          <img src="/app10.png" alt="App 10" className="w-32 h-32 rounded-lg" />
        </div>
      </div>
      {/* Image and Text Section */}
      <div className="flex items-center mt-10">
        <img src="/mobilefirst.png" alt="Feature" className="w-full h-auto" />
        <div className="ml-10">
          <h2 className="text-4xl font-bold -mt-10">Mobile First</h2>
          <p className="mt-2 text-[#374151]">
            With the majority of online purchases being made on mobile devices,
            our mobile-first approach ensures that your customers have a
            seamless experience when shopping on your eCommerce platform.
          </p>
          <button className="mt-4 flex items-center px-6 py-2 text-[#7C3AED] rounded  transition">
            Get Started
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Image and Text Section with Text on Left and Image on Right */}
      <div className="flex items-center mt-10">
        <div className="mr-10">
          <h2 className="text-4xl font-bold">Multi-vendor Marketplace</h2>
          <p className="mt-2 text-[#374151]">
            Transform your eCommerce store into a thriving multi-vendor
            marketplace. Our solution offers a seamless experience for vendors
            to manage their own storefronts and for you to run your own
            multi-vendor marketplace while providing your customers with a wider
            section of products and services.
          </p>
          <button className="mt-4 flex items-center px-6 py-2 text-[#7C3AED] rounded transition">
            Get Started
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
              />
            </svg>
          </button>
        </div>
        <img
          src="/mvm.png"
          alt="Descriptive Alt Text"
          className="w-full h-auto"
        />
      </div>
      {/* Section 3 */}
      <div className="flex items-center mt-10">
        <img src="/wc.png" alt="Feature" className="w-full h-auto" />
        <div className="ml-10">
          <h2 className="text-4xl font-bold -mt-10">Wholesale Commerce</h2>
          <p className="mt-2 text-[#374151]">
            Our whole commerce platform is tailores to meet the needs of
            wholesalers and distributors, with powerful tools for managing bulk
            orders, wholesale pricing, sales territories and customer accounts.
          </p>
          <button className="mt-4 flex items-center px-6 py-2 text-[#7C3AED] rounded  transition">
            Get Started
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Section 4 */}
      <div className="flex items-center mt-10">
        <div className="mr-10">
          <h2 className="text-4xl font-bold">Headless & Customizable</h2>
          <p className="mt-2 text-[#374151]">
            Take control of your ecommere experience with our headless commerce
            solution, allowing you to customize every aspect of your site for
            optimal performance and user experience. It is designed to provide
            the ultimate flexibility and scalability for your business needs.
          </p>
          <button className="mt-4 flex items-center px-6 py-2 text-[#7C3AED] rounded transition">
            Get Started
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
              />
            </svg>
          </button>
        </div>
        <img
          src="/hc.png"
          alt="Descriptive Alt Text"
          className="w-full h-auto"
        />
      </div>
      {/* Section 5 */}
      <div className="flex items-center mt-10 pb-10">
        <img src="/df.png" alt="Feature" className="w-full h-auto" />
        <div className="ml-10">
          <h2 className="text-4xl font-bold -mt-10">Developer Friendly</h2>
          <p className="mt-2 text-[#374151]">
            Empowering developeers with our easy SDK integration and custom CLI
            tools to build, deploy and manage their eCommerce app with ease.
          </p>
          <button className="mt-4 flex items-center px-6 py-2 text-[#7C3AED] rounded  transition">
            Get Started
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Full-Width Section */}
      <div className="w-screen bg-purple-600 text-white">
        <div className="flex items-center justify-between max-w-full mx-0 min-h-[400px]">
          {" "}
          {/* Set min height to match image height */}
          <div className="flex-1 pl-20 pr-10">
            <h2 className="text-4xl font-bold">
              Create amazing apps. For all your users.
            </h2>
            <p className="mt-5 text-lg">
              Empower your users. Increase your revenue.
            </p>
            {/* Image Links Section */}
            <div className="flex space-x-4 mt-5">
              {" "}
              {/* Space between images */}
              <a
                href="https://example1.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/link1.png"
                  alt="Link 1"
                  className="w-32 h-auto" // Adjust size as needed
                />
              </a>
              <a
                href="https://example2.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/link2.png"
                  alt="Link 2"
                  className="w-32 h-auto" // Adjust size as needed
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src="/footer1.png"
              alt="Descriptive Alt Text"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* Black Background Section */}
      <div className="w-screen bg-black text-white py-10">
        <div className="max-w-[1100px] mx-auto flex items-start">
          <div className="flex-1 pr-10">
            <h2 className="text-xl font-bold">🙏namaste</h2>
            <p className="mt-4">
              Namaste is a comprehensive commerce platform that offers a range
              of products and solutions to support businesses of all sizes.
              Whether you're an SMB, startup, D2C brand, wholesale company, or
              anything in between, Namaste has the tools and resources you need
              to succeed in today's fast paced digital landscape.
            </p>
            <p className="mt-2">
              We're also proud to offer the world's only platform that lets you
              build your own native eCOmmerce app and publish it on both Google
              Play and AppleApp Stores with just a click.
            </p>
          </div>
          {/* Right Side Column Div */}
          <div className="flex space-x-4">
            {/* Column 1 */}
            <div className="flex-1 max-w-[300px]">
              <h3 className="text-xl font-semibold">Product</h3>
              <p className="mt-3">Namaste</p>
              <p className="mt-3">Namaste Wholesale</p>
              <p className="mt-3">Namaste Startups</p>
              <p className="mt-3">Namaste X</p>
              <h3 className="text-lg font-semibold mt-5">Services</h3>
              <p className="mt-3">Own Domain</p>
              <p className="mt-3">Online Payments</p>
              <p className="mt-3">Delivery</p>
              <p className="mt-3">eCommerce App & Website</p>
            </div>
            {/* Column 2 */}
            <div className="flex-1 max-w-[300px]">
              <h3 className="text-xl font-semibold">Solutions</h3>
              <p className="mt-3">Hyperlocal Commerce</p>
              <p className="mt-3">Wholesale Commerce</p>
              <p className="mt-3">D2C Commerce</p>
              <p className="mt-3">Influencers Commerce</p>
              <p className="mt-3">Headless Commerce</p>
              <h3 className="text-xl font-semibold mt-5">More</h3>
              <p className="mt-3">Blog</p>
              <p className="mt-3">Docs</p>
              <p className="mt-3">Help & Support</p>
              <p className="mt-3 mb-20">About Us</p>
            </div>
            {/* Column 3 */}
            <div className="flex-1 max-w-[300px]">
              <h3 className="text-xl font-semibold">Reach Us</h3>
              <p className="mt-3">contact@namaste.business</p>
              <p className="mt-3">+91 080 4680 0950</p>
              <p className="mt-3">Mahamela Technologies Pvt Ltd No.1</p>
              <p>10th Main, Jeevanbhima Nagar,</p>
              <p>Bangalore-560075 Karnataka, India</p>
              <p>CIN:U72900DL2109PTC352645</p>
            </div>
          </div>

          {/* Gap Between Sections */}
          <div className="mt-8" />
          {/* Small Text in Lower Left Corner */}
          <div className="absolute bottom-2 left-2 text-sm mb-10">
            &copy; 2023 Mahamela Technologies Pvt Ltd. All rights reserved
          </div>

          {/* Right Side Content in Lower Right Corner */}
          <div className="absolute bottom-4 right-4 flex space-x-6 mb-10">
            <div>
              <p>Terms & Conditions</p>
            </div>
            <div>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p>Android Permissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
