import React from "react";
import { useCountRendersPlus } from './usecallbackrender';

export const UseCallbackHello = React.memo(({increment, decrement}) => {
    // useCountRendersPlus();
    return (
        <div>
          <button onClick={() => increment(5)}>increment</button>
          <button onClick={() => decrement(5)}>decrement</button>
        </div>
    );
});

