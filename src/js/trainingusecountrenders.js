import { useRef } from 'react';
export const useCountRendersPlus = () => {
    const renders = useRef(0);
  console.log('renders:', renders.current++);
};