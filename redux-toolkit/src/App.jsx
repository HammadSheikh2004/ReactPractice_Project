import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/Slicer/CounterSlicer';

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className='bg-zinc-600 w-full h-screen text-white flex justify-center items-center min-h-1.5'>
        <button aria-label='Increment Button' className='border-2 border-purple-800 p-3 bg-purple-500 rounded-lg cursor-pointer hover:bg-purple-700 mr-1' onClick={() => dispatch(increment())}>Increment</button>
        <p>Count: {counter}</p>
        <button aria-label='Decrement Button' className='border-2 border-purple-800 p-3 bg-purple-500 rounded-lg cursor-pointer hover:bg-purple-700 ml-1' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default App