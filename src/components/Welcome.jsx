import { useState } from "react"

function Welcome(props){

    const [a,setA] = useState(0)
    return (
        <>
            <h1>Asalam O Alaikum! {props.name}</h1>
            <p>{a}</p>
            <input type="button" value="Hit me" onClick={()=>{setA(a+1)}} />
        </>
    )
}

export default Welcome