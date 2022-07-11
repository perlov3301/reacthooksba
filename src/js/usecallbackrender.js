import { useRef } from 'react';

export const useCountRendersPLus = () => {
    const renders = useRef(0);
    console.log('renders:', renders.current++);
};