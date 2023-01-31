//next created types for req,res objects
import type { NextApiRequest, NextApiResponse } from 'next'
function parseDrugData(data: any){
    //data = JSON.parse(data);
    let parsedData = {
        warnings: 'Drug Data not found',
        use : 'Drug Data not found'
    }
    if (data.error){
        return parsedData;
    }
    parsedData.warnings = data.results[0].warnings_and_cautions[0];
    parsedData.use = data.results[0].indications_and_usage[0];
    return parsedData;


}
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    let body = JSON.parse(req.body);
    

    fetch(`https://api.fda.gov/drug/label.json?api_key=${process.env.FDAAPIKEY}&search=` +
    `openfda.brand_name:${body.drugName}&limit=1`,{
        method: "GET",
    }).then((res) => res.json())
    .then((response) => (parseDrugData(response)))
    .then((drugData) =>(res.send(drugData)));
   
}