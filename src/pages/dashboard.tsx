import React, { useState, useEffect } from "react";
import CommonUI from "./commonUI";
import Add from "components/Add";
import Grid from "components/Grid";
import DocGrid from "components/DocGrid";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

//the verifyRole function will prevent null from being returned
//ts is just in my way so I must say null could happen 
function getRole():string | null{
    let role:string | null = null;
    let validRole:boolean = false;
    while(!validRole){
        role = prompt('Are you a doctor or patient?');
        if(verifyRole(role)){
           validRole = true;
           if(role != null){
            role = role.toLowerCase();
           }
           break;
        } else {
            console.log('input is not valid: ',role);
            
        } 
    }
    return role;  
}
function verifyRole(role: string | null):boolean{
    if (role === null){
        return false;
    }
    role = role.toLowerCase();
    if(role != 'doctor' && role != 'patient'){
        alert('Please type doctor or patient')
        return false;
    }
    return true;
}
export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx){
        return {
            props : {
                test : 'test'
            }
        }
    }
});
const DoctorView = ({userSub}:any) => {
  return (
    <CommonUI>
      <DocGrid userSub ={userSub} />
    </CommonUI>
  );
};

const PatientView = ({userSub}:any) => {
  return (
    <CommonUI>
      <Add userSub={userSub}/>
      <Grid />
    </CommonUI>
  );
};
 

export default  function Dashboard({user,props}:any) {
  //status to see if user role is stored in db
    const [role, setRole] = useState<string | null>("");

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
                user : user
                })
            });
            let roleResult = await response.json();
            console.log(roleResult);
            
            //no role was found for the user 
            if(roleResult.length === 0){
                let roleInput = getRole();
                console.log('Your role is ' + roleInput);
                setRole(roleInput);
                await fetch("/api/db/addRole",{
                    method: "POST",
                    body: JSON.stringify({
                        role : roleInput,
                        userSub: user.sub
                    })
                });
            } else {
                setRole(roleResult[0].role);
                console.log('Role', role);
            }
    }
    fetchUser();
    fetchRole();
  }, []);
  //console.log(user);
  //return <div>{role === "admin" ? <DoctorView /> : <PatientView />}</div>;
  if(role == "doctor"){  
    return <DoctorView userSub={user.sub}/> 
  }else if(role  == "patient"){
    return <PatientView userSub={user.sub}/>
  } else {
    return <div>Determining Role</div>
  }
  
};

