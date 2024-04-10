import { useEffect, useState } from 'react'
import React from 'react'
import './Counter.css'

export const Counter = () => {
    // This initializes the state, sets the state, and setting the default value
    const [count, setCount] = useState(0)

    //The useEffect prints the count in the console in reaction to the change in state
    useEffect(() => {
        console.log("The count is ", count)
    }, [count]);


    // The function renders the count state set by (setCount) fired up by the onClick function
  return (
    <div className='container'>
        <div className='count'>
            <h2>Count</h2> 
        </div>
        <div className='number'>
            {count}
        </div>

        
        <div className='btn'>
            <button onClick={() => setCount(count + 1)} className='add'>+</button>  
            <button onClick={() => setCount(count - 1)} className='sub'>-</button>
        </div>
        
    </div>
  )
}
