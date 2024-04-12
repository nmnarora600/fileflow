import React from 'react'

function ProgressBar({progress}) {
  
  return (
   progress<100 && <div className={`bg-gray-400 w-full mt-3 h-3 rounded-full ${progress==100?'hidden':''}`}>
      
        <div className={` bg-primary rounded-full h-3 text-[11px] flex items-center justify-end text-white`} style={{width:`${progress}%`}}>
        {`${Number(progress).toFixed(0)}%`}&nbsp;&nbsp;
            </div> 
    </div>
  )
}

export default ProgressBar