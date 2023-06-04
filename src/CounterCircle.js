import React,{useState} from 'react'

const CounterCircle=(props)=>{
    const[counter,setCounter]=useState(0)
    const[circlecolor,setCircleColor]=useState('#4285F4')

    const incrementCounter=()=>{
        setCounter(counter+1)
    }

    const changeCircleColor=()=>{
        const randomColor=getRandomColor()
        setCircleColor(randomColor)
    }

    const getRandomColor=()=>{
        const letters='0123456789ABCDEF'
        let color='#'
        for(let i=0;i<6;i++){
            color+=letters[Math.floor(Math.random()*16)]
        }
        return color
    }

    const formatCounter=(count)=>{
        return count<10?`0${count}`:count
    }
    
    return (
        <center>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',
         backgroundColor:'lightgrey', width: '200px',padding: '50px',margin: '20px'}}>
            <div style={{
                width:'100px',
                height:'100px',
                borderRadius:'50%',
                backgroundColor:circlecolor,
                marginBottom:'10px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                color:'#fff',
                fontSize:'24px',
                position:'relative'
            }}>
            <div style={{marginBottom:'10px'}}>{formatCounter(counter)}</div>
            <button onClick={incrementCounter} style={{borderRadius:'50px'}}>+</button>
            </div>
            <button onClick={changeCircleColor}>Change Color</button>
        </div>
        </center>
    ) 
}
export default CounterCircle


