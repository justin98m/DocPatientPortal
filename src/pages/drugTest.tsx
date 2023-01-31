import {useState, useEffect} from 'react';

type body = {
    drugName : string;
}
export default function drugTest(){

    const handleChange = (e: any) : void => {
        setDrug(e.target.value);
        console.log(drug);
    }
    const handleSearch = (event: any): void => {
        event.preventDefault();
        console.log('running search on ', drug);
        fetch(('/api/searchFDA'),{
            method: 'POST',
            body :JSON.stringify({
                drugName : drug
            })  
        })
        .then((res) => res.json())
        .then ((data) => console.log(data))
        
    }
    const [drug,setDrug] = useState("");
    return (
        <>
            <label htmlFor="drug">Drug Name : </label>
            <input value= {drug}  name='drug' onChange = {handleChange} />
            <button onClick = {handleSearch}>Click Me</button>
        </>
    )
}