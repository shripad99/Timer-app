import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';
import { FaSquare } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const Timer = () => {
    const [sec,setSeconds] = useState(0);
    const [min,setMinutes] = useState(0);

    const timerRef = useRef(null);
    useEffect(() => {
        timerRef.current = setInterval(()=>{
            setSeconds(sec+1);
            if(sec === 59){
                setMinutes(min+1);
                setSeconds(0);
            }
        },1000)
        return () => clearInterval(timerRef.current);
    });

    const restart = () =>{
        setMinutes(0);
        setSeconds(0);
    }
    const stop = () =>{
        clearInterval(timerRef.current);
    }
  return (
    <div className='timer'>
        <div className='container'>
            <div className='timer_content'>
                <h1>Timer</h1>
                <h1>{min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}</h1>
                {/* <button className='restart ' onClick={restart}>Restart</button> */}
                {/* <button className='stop' onClick={stop}>Stop</button> */}
                <button class="button" onClick={restart}><VscDebugRestart />Restart<div class="hoverEffect"><div></div></div></button>
                <button class="button" onClick={stop}><FaSquare />Stop<div class="hoverEffect"><div></div></div></button>
            </div>
        </div>
    </div>
  )
}

export default Timer