import React from 'react';
import './App.css';
import UseSt1 from './js/usest1';
import UseSt2 from './js/usest2';
import UseSt3 from './js/usest3';
import UseSt4 from './js/usest4form';
import {UseSt5} from './js/usest5useform';
import UseEf1 from './js/useef1';
import UseEf2 from './js/useef2';
import UseEf3 from './js/useef3didunmount';
import UseEf4 from './js/useef4cleanup';
import UseEf5 from './js/useef5event';
import UseEf6 from './js/useef6api';
import UseEf7 from './js/useef7savestate';
import UseRef1 from './js/useref1';
import {UseRef2} from './js/useref2';
import { Useref3countRen } from './js/useref3countren';
import { Useref4 } from './js/useref4afterunmount';
import { TextRef } from './js/useref5buttonaction';
import { UseLayout1Measures } from './js/uselayout1measures';
import { UseLayout2width } from './js/uselayout2width';
import { UseCallback } from './js/usecallback';
import { UseCallbackMap } from './js/usecallbackmap';
import { UseMemo } from './js/usememo';
import { UseReducer } from './js/usereducer';
import { UseReducer1 } from './js/usereducer1';
import { UseReducer2 } from './js/usereducer2';
import { UseReducer3 } from './js/usereducer3';
import { UseContext1 } from './js/usecontext1';
import { UseContext2 } from './js/usecontext2';
import { UseContext3 } from './js/usecontext3';

import Training from './js/training';
const App = () => {
  return (
    <div className="App">
      <UseSt1 />
      <UseSt2 />
      <UseSt3 />
      <UseSt4 />
      <UseSt5 />
      <UseEf1 />
      <UseEf2 />
      <UseEf3 />
      <UseEf4 />
      <UseEf5 />
      <UseEf6 />
      <UseEf7 />
      <UseRef1 />
      <UseRef2 />
      <Useref3countRen />
      <Useref4 />
      <TextRef />
      <UseLayout1Measures />
      <UseLayout2width />
      <UseCallback />
      <UseCallbackMap />
      <UseMemo />
      <UseReducer/>
      <UseReducer1/>
      <UseReducer2/>
      <UseReducer3/>
      <UseContext1 />
      <UseContext2 />
      <UseContext3 />
      <Training />
    </div>
  );
}

export default App;
