import React from "react";
// import { useCountRendersPlus } from "./trainingusecountrenders";
 
export const TrainingHello = React.memo(({increment, decrement}) => {
//    useCountRendersPlus();
  //  useCountRendersMinus({decrement});
    return (
        <div > <span>TrainingHello change by 5</span>
           <button onClick={() => increment(5)} >increment</button>
           <button onClick={() => decrement(5)} >decrement</button>
        </div>
       
    );
});