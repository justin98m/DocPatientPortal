import {sendSQL} from './query';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let body = JSON.parse(req.body);
    let drug = body.drug;
    let userSub = body.sub;

    console.log("Drug data : ",body);
    

    //let getUserId = await sendSQL("select userId from from Login wher userSub='"+userSub+"'");
    //let patientId = getUserId[0].userId;
    // let drugTableResult = await sendSQL(
    //     "insert into Drugs (name,patientId)  );
    // console.log(result);
    
    //res.status(200).send(result);
}