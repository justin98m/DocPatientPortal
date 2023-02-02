import React, { useState } from 'react';

type Props = {};

const Add = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col justify-evenly items-center md:flex-row py-5">
      <div className="invisible flex text-md justify-center items-center md:visible md:pb-0">
        <label>My doctor:</label>
        <select className="text-md px-1">
          <option selected>Choose a doctor</option>
          <option>Dr. Baskin</option>
          <option>Dr. Ngo</option>
          <option>Dr. Cameron</option>
          <option>Dr. Howard</option>
          <option>Dr. Camargo</option>
        </select>
      </div>
      <h1 className="font-extrabold text-5xl pb-5 text-center text-boared md:py-3 mb-1">
        Medication Log
      </h1>
      <button
        className="mb-1 bg-boablue hover:bg-blue-800 text-white px-5 py-3 font-bold uppercase text-sm rounded-md ease-linear transition-all duration-150 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add new medication
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg text-center font-semibold uppercase">
                    Add new medication
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <div className="flex pb-5 flex-col p-10">
                  <div className="flex pb-5 flex-col">
                    <label className="font-sans font-bold text-boablue mr-2">
                      Medication Name
                    </label>
                    <input
                      type="text"
                      className="border-solid border-b-2 border-gray-300"
                    />
                  </div>
                  <div>
                    <form>
                      <label className="font-sans font-bold text-boablue mr-2">
                        Dosage
                      </label>
                      <div className="flex pb-5 flex-col ">
                        <input
                          type="number"
                          className="border-solid border-b-2 border-gray-300"
                        />
                        <select>
                          <option value="microgram">Microgram</option>
                          <option value="milligram">Milligram</option>
                          <option value="gram">Gram</option>
                          <option value="kilogram">Kilogram</option>
                          <option value="c3">Cubic centimeter</option>
                          <option value="millitre">Millitre</option>
                          <option value="litre">Litre</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="flex pb-5 flex-col">
                    <label className="font-sans font-bold text-boablue mr-2">
                      Intake Type
                    </label>
                    <select>
                      <option value="tablet">Tablet</option>
                      <option value="syrup">Syrup</option>
                      <option value="spray">Spray</option>
                      <option value="solution">Solution</option>
                      <option value="soap">Soap/Shampoo</option>
                      <option value="pill">Pill</option>
                      <option value="aerosol">Aerosol</option>
                      <option value="cream">Cream</option>
                      <option value="enema">Enema</option>
                      <option value="injection">Injection</option>
                      <option value="liquid">Liquid</option>
                      <option value="lotion">Lotion</option>
                    </select>
                  </div>
                  <div className="flex pb-5 flex-col">
                    <label className="font-sans font-bold text-boablue mr-2">
                      Time of Day
                    </label>
                    <select>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                      <option value="night">Night</option>
                      <option value="needed">As Needed</option>
                    </select>
                  </div>
                  <div className="flex pb-5 flex-col">
                    <label className="font-sans font-bold text-boablue mr-2">
                      Time
                    </label>
                    <input type="time" />
                  </div>
                  <div className="flex pb-5 flex-col">
                    <label className="font-sans font-bold text-boablue mr-2">
                      Start Date
                    </label>
                    <input type="date" />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-boablue text-white hover:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Add;
