import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {  increment,decrement, reset } from './Redux/CounterSlice';
 



const Counter = () => {

    const dispatch = useDispatch();

    const {count} = useSelector(state=>state.counter)
  return (
    <>
    
    <div className="counter">
        
    <h1>Count : {count}</h1>
    <div>
        <button className='button1' onClick= {()=>{dispatch(increment())}}>+</button>
        <button  className='button1' onClick= {()=>{dispatch(decrement())}}>-</button>
        <button  className='button1' onClick= {()=>{dispatch(reset())}}>reset</button></div>
        
    </div>
    
    </>
  )
}

export default Counter