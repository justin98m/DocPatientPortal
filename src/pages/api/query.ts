//next created types for req,res objects
// import type { NextApiRequest, NextApiResponse } from 'next'
import {connection} from './connect';


export async function sendSQL(sql:string) {
   
    let result = await dbQuery(sql, await connection());
    return result
}

export async function dbQuery(sql:string,con:any){
    const [rows] = await con.execute(sql)
    return rows;
}


