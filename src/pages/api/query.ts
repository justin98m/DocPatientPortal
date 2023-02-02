//next created types for req,res objects
import type { NextApiRequest, NextApiResponse } from 'next'
import {connection} from './connect';


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    console.log(req.body);
    
    let result = await dbQuery(req.body.query, await connection());
    if (result.err){
        res.status(404).send(result.err);
    }
    res.status(200).send(result);
}

export async function dbQuery(sql:string,con):object{
    const [rows] = await con.execute(sql)
    return rows;
}


