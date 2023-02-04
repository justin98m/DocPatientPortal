import {sendSQL} from './query';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let body = JSON.parse(req.body);

    
    let userSub = body.userSub;
    console.log(userSub);
    
    let result = await sendSQL("Select * from Login where userSub ='" +userSub+"' and role is not null");
    console.log(result);
    
    res.status(200).send(result);
}