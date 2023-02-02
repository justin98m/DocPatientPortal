import React from "react";

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
      <header>Header</header>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default CommonUI;