import React, { useState,useEffect } from 'react';


function DocGrid({userSub}:any) {
  let [patients, updatePatients] = useState("");
  
  useEffect(() =>{
    const fetchPatients = async() =>{
    let patientResults = await fetch('/api/db/findPatients',{
      method: 'POST',
      body: JSON.stringify({
        userSub
      })
    })
    patientResults = await patientResults.json();
    console.log(patientResults);
     }
     fetchPatients();
  })
    if(patients.length == 0){
      return <h1><br></br><br></br><strong>You Have No Patients Yet</strong></h1>
    } else 
    return(
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 lg:px-5 lg:py-5">
      <div className="grid grid-cols-2 gap-2 mb-5 p-2 border-b border-solid border-boablue col-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Patient Name</h3>
          <p className="text-black">Patient 1 Name</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Patient Phone</h3>
          <p className="text-black">Patient 1 Phone</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Medication Count</h3>
          <p className="text-black">Patient 1 Count</p>
        </div>
      </div>

      </div>
  );
}

export default DocGrid;
