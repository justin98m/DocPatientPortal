"use client";
import React from "react";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="sticky top-0 ">
      <div className="hidden text-sm w-screen bg-accentgray font-light md:flex flex-row justify-end px-5 py-2 top-0 md:mr-10">
        <a href="#">BankofAmerica.com</a>
        <span className="px-5">|</span>
        <a href="#">About Bank of America</a>
        <span className="px-5">|</span>
        <a href="#">Patient Login</a>
        <span className="px-5">|</span>
        <a href="#">Doctor Login</a>
      </div>
      <div className="w-screen flex flex-row items-center justify-between">
        <a href="/">
          <Image
            src="/boa-logo.svg"
            width={300}
            height={300}
            alt="logo"
            className="px-5 pb-5 pt-4 object-cover md:pl-10"
          />
        </a>
        <button className="block py-3 px-4 mx-2 rounded group items-end">
          <div className="w-9 h-1 bg-boablue mb-1"></div>
          <div className="w-9 h-1 bg-boablue mb-1"></div>
          <div className="w-9 h-1 bg-boablue "></div>
          <div className="absolute top-0 md:top-9 h-screen w-4/12 bg-white opacity-0 group-focus: right-0 group-focus:opacity-100 transition-all duration-300">
            <h1 className="font-bold text-xl pt-10">Menu</h1>
            <span className="block text-center h-1 bg-boablue my-2 mx-10"></span>
            <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
              <li className="py-4 px-6 w-full hover:underline">Home</li>
              <li className="py-4 px-6 w-full hover:underline">
                Patient Login
              </li>
              <li className="py-4 px-6 w-full hover:underline">Doctor Login</li>
            </ul>
          </div>
        </button>
      </div>
      <div className="bg-accentgray w-screen font-light flex flex-row justify-start px-5 py-1 text-sm md:pl-10">
        <h3>Doctor & Patient Portal</h3>
      </div>
    </header>
  );
};

export default Navbar;
