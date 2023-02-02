import React, { useState } from 'react';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      {isReadMore ? text.toString().slice(0, 20) : text}
      <span onClick={toggleReadMore} className="font-extrabold text-boared">
        {isReadMore ? '...read more' : ' show less'}
      </span>
    </div>
  );
};

function Grid() {
  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 lg:px-5 lg:py-5">
      <div className="grid grid-cols-2 gap-2 mb-5 p-2 border-b border-solid border-boablue col-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Start Date:</h3>
          <p className="text-black">11-15-2021</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Time:</h3>
          <p className="text-black">06:30 PM</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Frequency:</h3>
          <p className="text-black">Daily</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Medication Name:
          </h3>
          <p className="text-black">Metformin</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Intake Type:
          </h3>
          <p className="text-black">Tablet</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Dosage:</h3>
          <p className="text-black">500 Milligram</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Taking for...
          </h3>
          <p className="text-black">Diabetes</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col col-span-2 md:col-span-4 lg:col-span-3">
          <h3 className="font-sans font-bold text-boablue mr-2">Warnings:</h3>

          <p className="text-black">
            <ReadMore>
              Metformin may rarely cause a serious, life-threatening condition
              called lactic acidosis. Tell your doctor if you have kidney
              disease. Your doctor will probably tell you not to take metformin.
              Also, tell your doctor if you are over 65 years old and if you
              have ever had a heart attack; stroke; diabetic ketoacidosis (blood
              sugar that is high enough to cause severe symptoms and requires
              emergency medical treatment); a coma; or heart or liver disease.
              Taking certain other medications with metformin may increase the
              risk of lactic acidosis. Tell your doctor if you are taking
              acetazolamide (Diamox), dichlorphenamide (Keveyis), methazolamide,
              topiramate (Topamax, in Qsymia), or zonisamide (Zonegran).
            </ReadMore>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-5 p-2 border-b border-solid border-boablue col-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Start Date:</h3>
          <p className="text-black">05-10-2022</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Time:</h3>
          <p className="text-black">09:30 AM</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Frequency:</h3>
          <p className="text-black">Daily</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Medication Name:
          </h3>
          <p className="text-black">Azelastine</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Intake Type:
          </h3>
          <p className="text-black">Spray</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Dosage:</h3>
          <p className="text-black">11 Millilitres</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Taking for...
          </h3>
          <p className="text-black">Allergies</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col col-span-2 md:col-span-4 lg:col-span-3">
          <h3 className="font-sans font-bold text-boablue mr-2">Warnings:</h3>
          <p className="text-black">
            <ReadMore>
              Only for use in the nose. Do not spray in eyes or mouth. Do not
              use if you have ever had an allergic reaction to this product or
              any of its ingredients. Ask a doctor before use if you have had
              recent nose ulcers or nose surgery; had a nose injury that has not
              healed. When using this product drowsiness may occur; avoid
              alcoholic drinks, alcohol, sedatives, and tranquilizers may
              increase drowsiness, be careful when driving a motor vehicle or
              operating machinery. You may get a bitter taste in your mouth. To
              avoid this, tilt your head downward while spraying; nasal
              discomfort or sneezing may occur right after use. Do not share
              this bottle with anyone else as this may spread germs.
            </ReadMore>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 col-auto p-2 border-b border-solid border-boablue mb-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Start Date:</h3>
          <p className="text-black">01-20-2023</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Time:</h3>
          <p className="text-black">12:05 PM</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Frequency:</h3>
          <p className="text-black">Daily</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Medication Name:
          </h3>
          <p className="text-black">Dextromethorphan HBr</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Intake Type:
          </h3>
          <p className="text-black">Liquid</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Dosage:</h3>
          <p className="text-black">20 Millilitres</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Taking for...
          </h3>
          <p className="text-black">Cough</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col col-span-2 md:col-span-4 lg:col-span-3">
          <h3 className="font-sans font-bold text-boablue mr-2">Warnings:</h3>
          <p className="text-black">
            <ReadMore>
              Do not use this medication if you are taking an MAOI (medication
              for depression, psychiatric, emotional conditions or Parkinson's
              disease) or for two weeks after stopping an MAOI. Ask a healthcare
              provider before using this medicine if you have a chronic cough
              that is caused by asthma, smoking, or emphysema. Talk to your
              healthcare provider prior to taking this medicine if you are
              pregnant or breastfeeding as well.
            </ReadMore>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 col-auto p-2 border-b border-solid border-boablue mb-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Start Date:</h3>
          <p className="text-black">01-20-2023</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Time:</h3>
          <p className="text-black">10:30 PM</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Frequency:</h3>
          <p className="text-black">Daily</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Medication Name:
          </h3>
          <p className="text-black">Guaifenesin</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Intake Type:
          </h3>
          <p className="text-black">Tablet</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Dosage:</h3>
          <p className="text-black">600 Milligrams</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Taking for...
          </h3>
          <p className="text-black">Congestion</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col col-span-2 md:col-span-4 lg:col-span-3">
          <h3 className="font-sans font-bold text-boablue mr-2">Warnings:</h3>
          <p className="text-black">
            <ReadMore>
              Do not use for children under 12 years of age if you are now
              taking a prescription monoamine oxidase inhibitor (MAOI) (certain
              drugs for depression, psychiatric or emotional conditions, or
              Parkinson's disease), or for 2 weeks after stopping the MAOI drug.
              If you do not know if your prescription drug contains an MAOI, ask
              a doctor or pharmacist before taking this product.
            </ReadMore>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 col-auto p-2 border-b border-solid border-boablue mb-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Start Date:</h3>
          <p className="text-black">02-01-2023</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Time:</h3>
          <p className="text-black">09:45 AM</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Frequency:</h3>
          <p className="text-black">When Needed</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Medication Name:
          </h3>
          <p className="text-black">Acetaminophen</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Intake Type:
          </h3>
          <p className="text-black">Tablet</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Dosage:</h3>
          <p className="text-black">325 Milligram</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Taking for...
          </h3>
          <p className="text-black">Pain relief</p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col col-span-2 md:col-span-4 lg:col-span-3">
          <h3 className="font-sans font-bold text-boablue mr-2">Warnings</h3>
          <p className="text-black">
            <ReadMore>
              Taking too much acetaminophen can cause liver damage, sometimes
              serious enough to require liver transplantation or cause death.
              You might accidentally take too much acetaminophen if you do not
              follow the directions on the prescription or package label
              carefully, or if you take more than one product that contains
              acetaminophen.
            </ReadMore>
          </p>
        </div>
      </div>

      {/* BLANK COMPONENT
      <div className="grid grid-cols-2 gap-2 col-auto p-2 border border-solid border-boablue mb-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
        <div className="col-span-1 flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Time of Day:
          </h3>
          <p className="text-black"> </p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Start Date:</h3>
          <p className="text-black"></p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Time:</h3>
          <p className="text-black"></p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Medication Name:
          </h3>
          <p className="text-black"></p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Intake Type:
          </h3>
          <p className="text-black"></p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Dosage:</h3>
          <p className="text-black"></p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">
            Taking for...
          </h3>
          <p className="text-black"></p>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <h3 className="font-sans font-bold text-boablue mr-2">Warnings</h3>
          <p className="text-black">
            <ReadMore></ReadMore>
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Grid;
