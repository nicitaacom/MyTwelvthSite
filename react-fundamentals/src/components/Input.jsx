import {useState} from "react";

export function Input() {
    const [value,setValue] = useState('')
    return (
        <>

        <h2>Input text:{value}</h2>
    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Enter text'/>
        </>
    )
}