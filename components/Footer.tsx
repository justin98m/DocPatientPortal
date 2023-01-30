import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-boablue">
      <div className="flex flex-row justify-center items-center">
        <a href="/">
          <Image
            src="/boa_logo-white.png"
            width={300}
            height={300}
            alt="logo"
            className="px-5 pb-5 pt-10 flex flex-row justify-center items-center"
          />
        </a>
      </div>
      <div className="flex flex-wrap justify-center pb-5 -mx-4">
        <a
          href="#"
          className="mx-4 text-gray-100 transition-colors duration-300 hover:underline"
          aria-label="home"
        >
          Home
        </a>

        <a
          href="#"
          className="mx-4 text-gray-100 transition-colors duration-300 hover:underline"
          aria-label="log"
        >
          Medication Log
        </a>

        <a
          href="#"
          className="mx-4 text-gray-100 transition-colors duration-300 hover:underline"
          aria-label="about"
        >
          About
        </a>
      </div>
      <span className="block text-center h-1 bg-gray-100 my-2 mx-10"></span>
      <div className="px-5 py-4 flex flex-col justify-between items-center md:flex-row md:mx-10 ">
        <div>
          <p className="text-gray-100">
            © 2023{' '}
            <span className="font-bold"> Bank of America Corporation.</span> All
            rights reserved.
          </p>
        </div>
        <div className="p-5 flex flex-col justify-center items-center md:flex-row">
          <p className="text-gray-100">Connect with us:</p>
          <div className="">
            <SocialIcon
              url="https://www.linkedin.com/company/bank-of-america/"
              fgColor="transparent"
              bgColor="white"
              style={{ height: 30, width: 30 }}
              target="_blank"
              className="m-1"
            />
            <SocialIcon
              url="https://twitter.com/BankofAmerica?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              fgColor="transparent"
              bgColor="white"
              style={{ height: 30, width: 30 }}
              target="_blank"
              className="m-1"
            />
            <SocialIcon
              url="https://www.youtube.com/user/bankofamerica"
              fgColor="transparent"
              bgColor="white"
              style={{ height: 30, width: 30 }}
              target="_blank"
              className="m-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
