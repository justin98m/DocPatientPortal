import {sendSQL} from './query';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let body = JSON.parse(req.body);

    
    let userSub = body.user.sub;
    let result = await sendSQL("Select * from Login where userSub ='" +userSub+"'");
    if(!result.length){
        console.log('user is not stored yet');
        result =  await addUser(body.user);
        
    }
    
    
    res.status(200).send(result);
}

async function addUser(user:any){
    return await sendSQL(`INSERT INTO Login (email,name, userSub)Values(`+
    `'${user.email}','${user.given_name}','${user.sub}')`);
}