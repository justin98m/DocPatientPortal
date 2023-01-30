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
        <a href="#">
          <button
            type="button"
            className="mx-5 mb-5 mt-4 text-gray-100 bg-boablue hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Login
          </button>
        </a>
      </div>
      <div className="bg-accentgray w-screen font-light flex flex-row justify-start px-5 py-1 text-sm md:pl-10">
        <h3>Doctor & Patient Portal</h3>
      </div>
    </header>
  );
};

export default Navbar;
