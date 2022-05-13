import React, { useRef } from "react";
 
export const Helloref3 = () => {
    const renders = useRef(0);

    // console.log("helloref3 renders:", renders.current++);
    return (
        <div className="divrow"><span>Helloref3 count of renderings</span>
            <div>&nbsp;renders:{renders.current++}</div>
        </div>
    );
};