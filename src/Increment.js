import React from 'react'

const Increment=(props)=>{
    const {cendol,incrementCendol}=props
    return (
        <div>
            <button onClick={incrementCendol}>Increment by 10</button>
        </div>
    )
}
export default Increment