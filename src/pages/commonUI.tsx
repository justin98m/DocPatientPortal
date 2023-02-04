import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const CommonUI = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}    ) => {
  return (
    <div>
      <Navbar />
        {props.children}
      <Footer />
    </div>
  );
};

export default CommonUI;