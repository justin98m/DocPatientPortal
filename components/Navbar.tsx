"use client";
import React from "react";
import Image from "next/image";
import Login from "components/Login"

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="top-0 ">
      <div className="hidden text-sm w-screen bg-accentgray font-light md:flex flex-row justify-end px-5 py-2 top-0 md:mr-10">
        <a
          href="https://business.bofa.com/en-us/content/healthcare-financial-management.html"
          target="_blank"
          className="hover:underline text-boablue"
        >
          BankofAmerica.com
        </a>
        <span className="px-5">|</span>
        <a
          href="https://about.bankofamerica.com/en"
          target="_blank"
          className="hover:underline text-boablue"
        >
          About Bank of America
        </a>
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
              <Login/>
      </div>
      <div className="bg-accentgray w-screen font-light flex flex-row justify-start px-5 py-1 text-sm md:pl-10">
        <h3>Doctor & Patient Portal</h3>
      </div>
    </header>
  );
};

export default Navbar;
