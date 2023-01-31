//next created types for req,res objects
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
   // let drug = JSON.parse(req.body.drugName);
    let drug = JSON.parse(req.body);
    console.log('Drug :' ,drug.drugName);
    console.log(process.env.FDAAPIKEY);
    //console.log(req);

    fetch(`https://api.fda.gov/drug/label.json?api_key=${process.env.FDAAPIKEY}&search=` +
    `openfda.brand_name:${drug.drugName}&limit=1`,{
        method: "GET",
    }).then((res) => res.json())
    .then((response) => (res.send(response)));
   
}