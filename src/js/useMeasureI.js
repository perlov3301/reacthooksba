import { useState, useLayoutEffect } from 'react';

export const useMeasureI = (ref, deps) => {
    const [H, setH] = useState({});
    const [W, setW] = useState({});
    const fround = (v) => {
        let a = v * 10;
        v = Math.round(a);
        a = v/10;
        return a;
    };

    useLayoutEffect(() => {
        const rect1 =  ref.current.getBoundingClientRect();
        const vH = fround(rect1.height);
        const vW = fround(rect1.width);
        // console.log("traninghello useLayouteffect rect1: ", vH, 'X', vW);
        setW(vW);
        setH(vH);
    }, deps);
    return [H, W];
} ;