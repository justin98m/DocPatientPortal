import React, { useState, useEffect } from "react";
import CommonUI from "./commonUI";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

//the verifyRole function will prevent null from being returned
//ts is just in my way so I must say null could happen 
/*function getRole():string | null{
    let role:string | null = ' ';
    while(!verifyRole(role)){
        role = prompt('Are you a doctor or patient?');
    }
    return role;  
}
function verifyRole(role: string | null):boolean{
    if (role == null){
        return false;
    }
    role = role.toLowerCase();
    if(role != 'doctor' && role != 'patient'){
        alert('Please type doctor or patient')
        return false;
    }
    return true;
}*/
export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx){
        return {
            props : {
                test : 'test'
            }
        }
    }
});
const DoctorView = () => {
  return (
    <CommonUI>
      <h1>Welcome, Admin!</h1>
      <p>You have access to all features.</p>
    </CommonUI>
  );
};

const PatientView = () => {
  return (
    <CommonUI>
      <h1>Welcome, User!</h1>
      <p>You have limited access to features.</p>
    </CommonUI>
  );
};
 

export default  function Dashboard({user,props}:any) {
  //status to see if user role is stored in db
    const [role, setRole] = useState("");

  useEffect(() => {
    // Fetch the user's sub role
    const fetchUser = async () => {
        const response = await fetch("/api/db/user",{
        method: "POST",
        body: JSON.stringify({
            user: user
            })
        });
        //add this point the user is confirmed to be in the db
    }
    const fetchRole = async() => {
        const response = await fetch("/api/db/checkUserRole",{
            method: "POST",
            body: JSON.stringify({
                user: user
                })
            });
            let roleResult = await response.json();
            //no role was found for the user 
            if(roleResult.length === 0){
                //let roleInput = getRole();
                //verifyRole(roleInput);
                console.log('Use has not been assigned a role yet');
                
            }
            console.log(roleResult)
    }
    fetchUser();
    fetchRole();
  }, []);
  //console.log(user);
  //return <div>{role === "admin" ? <DoctorView /> : <PatientView />}</div>;
  return <div>hi</div> 
};

