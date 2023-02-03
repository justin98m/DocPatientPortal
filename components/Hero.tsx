import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <section className='relative bg-[url("/hero.jpg")] bg-cover bg-center bg-no-repeat h-96'>
        <div className="absolute inset-0 bg-white/75 md:bg-transparent md:bg-gradient-to-r md:from-white/95 md:to-white/40"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="mt-8 text-boablue text-5xl font-extrabold sm:text-5xl">
              Bank of America
              <strong className="block text-2xl font-extrabold text-boared">
                Medication Log
              </strong>
            </h1>
            <p className="mt-4 max-w-lg md:leading-relaxed">
              The <span className="font-semibold text-boablue">Bank of America Medication Log</span> is a powerful tool that helps
              individuals keep track of their medication schedule. It makes it
              easy to manage medications with reminders, refill notifications,
              cost comparisons, and dosage tracking. The app also provides
              detailed reports to help users track their progress and keep their
              health in check.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-center justify-center">
              <a
                href="/patientdashboard"
                className="block w-64 rounded bg-boared px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                View my log
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
