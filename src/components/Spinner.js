import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex my-auto content-center items-center space-y-2 flex-col ">
        <div className='spinner'></div>
        <p className="text-bgDark text-lg font-semibold">Loading....</p>
    </div>
  )
}

export default Spinner