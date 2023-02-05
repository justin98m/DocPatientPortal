import {sendSQL} from './query';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let body = JSON.parse(req.body);
    let userSub = body.userSub;
    let role = body.role;
    
    let result = await sendSQL(
        "update Login SET role ='"+role+"' where userSub ='" +userSub+"'");
    console.log(result);
    
    res.status(200).send(result);
}