import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <section className='relative bg-[url("/hero.jpg")] bg-cover bg-center bg-no-repeat h-96'>
        <div className="absolute inset-0 bg-white/75 md:bg-transparent md:bg-gradient-to-r md:from-white/90 md:to-white/10"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-boablue text-3xl font-extrabold sm:text-5xl">
              Bank of America
              <strong className="block text-2xl font-extrabold text-boared">
                Medication Log
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
              <a
                href="/api/auth/login"
                className="block w-64 rounded bg-boared px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
