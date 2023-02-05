import React, { useState } from "react";
import Form from "./Form";

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
              <div className="border-0 rounded-lg p-6 px-10 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg pb-2 font-semibold uppercase">
                    Add new medication
                  </h3>
                  <button
                    className="text-boared background-transparent font-bold uppercase pt-1 pl-10 text-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                {/*body*/}
                <Form userSub={props.userSub} />
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
