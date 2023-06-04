import React,{useState} from 'react'
import Increment from './Increment'

const IncrementContainer=(props)=>{
    const[cendol,setCendol]=useState(2)

    const incrementCendol=()=>{
        const result=cendol+10
        setCendol(result)
    }
    return (
        <div>
            <center>
                <h3>{cendol}</h3>
                <Increment cendol={cendol} incrementCendol={incrementCendol} />
            </center>
        </div>
    )
}

export default IncrementContainer