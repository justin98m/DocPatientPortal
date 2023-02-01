import {CronJob} from 'cron';
import type { NextApiRequest, NextApiResponse } from 'next';
import {UTCNumberToDate} from '../../lib/dateConversion';

type twilioData = {
    date : string;
    message : string;
    phone : string;
}

function sendText(message: string, patientPhone: string):void{
    console.log('Text Being sent to patient');
    
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        //Links to my twilio account phone number
        body: message,
        from : process.env.SERVER_PHONE_NUMBER,
        //must be in the format +1xxxXXXxxxx
        to: patientPhone
    })
    .then((message: object) =>  (console.log('message sent: ', message)));   
}

function scheduleJob(twilioData: twilioData):void {
  
    var job = new CronJob(
        //date to start
        UTCNumberToDate(twilioData.date),
        //function to run 
        () => sendText(twilioData.message,twilioData.phone),
        //function to run when job is finished
        null,
        //start the job immediately
        false,
    )
    job.start();
    console.log('Job Scheduled');
    

}

export default function handler(req: NextApiRequest, res: NextApiResponse){
    let body = JSON.parse(req.body);
    try {
        //scheduleJob(req.body.twilioData);
        scheduleJob(body.twilioData);
        res.status(200).send('Message scheduled successfully');
    } catch (err) {
        console.log(req.body.twilioData);
        
        res.status(400).send(`Please check your sent post data  ${req.body}`);
    }
}