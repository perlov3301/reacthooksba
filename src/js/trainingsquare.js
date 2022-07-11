import React from "react";
import { useCountRendersPlus } from "./trainingusecountrenders";
 
export const Square = React.memo(({n, increment, decrement}) => {
   useCountRendersPlus();
  //  useCountRendersMinus({decrement});
    return (
        <div className="divrow square" > <span>Square changes  by number</span>
           <button onClick={() => increment(n)} >inc {n}</button>
           <button onClick={() => decrement(n)} >dec {n}</button>
        </div>
       
    );
});