// import React, { useState, useEffect } from "react";
// import CommonUI from "./commonUI";

// const doctorView = () => {
//   return (
//     <CommonUI>
//       <h1>Welcome, Admin!</h1>
//       <p>You have access to all features.</p>
//     </CommonUI>
//   );
// };

// const patientView = () => {
//   return (
//     <CommonUI>
//       <h1>Welcome, User!</h1>
//       <p>You have limited access to features.</p>
//     </CommonUI>
//   );
// };

// const App = () => {
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     // Fetch the user's role and permissions from the database
//     const fetchUserRole = async () => {
//       const response = await fetch("/api/user");
//       const userData = await response.json();
//       const { role } = userData;
//       setRole(role);
//     };

//     fetchUserRole();
//   }, []);

//   return <div>{role === "admin" ? <doctorView /> : <patientView />}</div>;
// };

// export default App;
export {}; 