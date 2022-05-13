import React, { useRef } from "react";

export const HelloRef = () => {
    const renders = useRef(0);
    renders.current++;
    // console.log("Helloref renders:", renders.current);
    return <div>Hello1</div>;
};