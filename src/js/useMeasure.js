import { useState, useLayoutEffect } from 'react';

export const useMeasure = (ref, deps) => {
   // const divRef = useRef(); => whatever ref instead
    const [rect, setRect] = useState({});

    useLayoutEffect(() => {
        const rect1 =  ref.current.getBoundingClientRect();
        // console.log("traninghello useLayouteffect rect1: ", rect1.width, 'X', rect1.height);
        setRect(rect1.width + 'x' + rect1.height);
    }, [deps]);
    return rect;
} ;