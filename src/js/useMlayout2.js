import { useState, useLayoutEffect } from 'react';

const fround = (a) => {
    let b = a * 10;
    a = parseInt(b);
    return a/10;
};
export const useMlayout2 = (ref, deps) => {
   // const divRef = useRef(); => whatever ref instead
    const [rect, setRect] = useState({});

    useLayoutEffect(() => {
        const rect1 =  ref.current.getBoundingClientRect();
        // console.log("traninghello useLayouteffect rect1: ", rect1.width, 'X', rect1.height);
        const w = fround(rect1.width);
        const h = fround(rect1.height);
        setRect(h + 'x' + w);
    }, deps);
    return rect;
} ;