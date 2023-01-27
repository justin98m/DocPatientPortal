import React from 'react';
import Image from 'next/image';
import Tracker from '../public/tracker.svg';
import Pills from '../public/pillsDoctors.svg';
import List from '../public/list.svg';
import Appt from '../public/doctorPatient.svg';
import Reminder from '../public/reminder.svg';
import Add from '../public/addList.svg';

type Props = {};

const Solutions = (props: Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="font-bold text-2xl text-center font-sans lg:mb-5">
        Solutions
      </h2>
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-b md:border-r lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
              <Image src={Tracker} alt="calendar with dates checked off" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-sans">
              Track Medication Consumption{' '}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Log when you start a medication and each time you take a new dose.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
              <Image src={Appt} alt="two doctors" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-sans">
              Medication List Accessible for Appointments
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Have an easy to access list of medications you're currently taking
              and have taken in the past to bring to doctor's appointments.
            </p>
          </div>
        </div>
        <div className="p-8 border-b md:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
              <Image src={List} alt="person with list" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-sans">
              Easy Access to Medication History
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Browse medications you've taken in the past and allow your doctor
              to see with ease.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
              <Image src={Pills} alt="nurses with a pill bottle" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-sans">
              Check Prescription Information
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              View what certain prescriptions treat with any warnings to keep
              note of.
            </p>
          </div>
        </div>
        <div className="p-8 border-b md:border-r md:border-b-0 lg:border-r lg:border-b-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
              <Image src={Reminder} alt="person with notification reminders" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-sans">
              Medication Reminders
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Set up a schedule for when to take certain medications and receive
              reminders.
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
              <Image src={Add} alt="lists with buttons to add more items" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-sans">
              Add New Prescriptions Anytime
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Easily add new prescriptions to your medication tracker.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
