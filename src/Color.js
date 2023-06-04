import React,{useState} from 'react'

const Color=(props)=>{
    const [isVariableTrue,SetIsVariableTrue]=useState(true)
    const handleButtonClick=()=>{
        SetIsVariableTrue(!isVariableTrue)
    }
    return (
        <div>
        <center>
            <button style={{backgroundColor:isVariableTrue?'red':'blue'}}
            onClick={handleButtonClick}>click</button>
        </center>
        </div>
    )
}

export default Color