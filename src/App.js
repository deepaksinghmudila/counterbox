import React,{useState} from "react";
import Header from './Header.js';
import Counter from './Counter';

const App = () => {
  
  const [copy, setCopy] = useState(false);
  const [clear, setClear] = useState(false);
  

  return (
    <>
      <Header setCopy={setCopy} setClear={setClear} />       
      <br/>
      <Counter />

    </>
  );
}; 

export default App;