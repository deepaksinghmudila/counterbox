import React,{useState,useRef} from "react"; 
import "./index.css"; 

const Counter = () => {

    const [text, setText] = useState(""); 
    const [char, setChar] = useState(0);
    const [words, setWords] = useState(0);
    const [time, setTime] = useState(0);     
    const [msg, setMsg] = useState(""); 
  
    const textAreaRef = useRef(null);
    
    const handleChange = (e) => { 

       setText(e.target.value);
       let string = e.target.value;
       let len = string.length;

       let word = string.trim().split(" ");
       word = word.filter((words) => words !== "").length  // counts only valid words i.e (len>0)
       let readtime = word / 200;

       setChar(len);
       setWords(word);
       setTime(readtime); 
    }
     
    const copyToClipboard = (e)=>{
      textAreaRef.current.select();
      document.execCommand("copy");

      e.target.focus(); //textAreaRef.current.focus();      
      setMsg("copied");       

      setTimeout(() => {
        setMsg("");
      }, 1000);
    }
    
    const clearTextarea = () => {
         setText(""); setTime(0);
         setChar(0); setWords(0);                                 
         setMsg("clear"); 
      
      setTimeout(() => {
        setMsg("");
      }, 1000);

       /*console.log("copy status ", copy);
       console.log("clear status ", clear);*/
    }
    

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Counter Box </h1>
          <div className="btns">
             <button className="copy" onClick={copyToClipboard}>
               Copy
             </button>
            <h4 className="message"> {msg}</h4>
             <button className="clear" onClick={clearTextarea}>
               Clear
             </button>
          </div>
        </div>
        <div className="text">
          <textarea
            name="textarea"
            placeholder="Type text or paste"
            style={{ width: "60em", height: "25em" }}
            value={text}
            onChange={handleChange}
            ref={textAreaRef}
            className="textArea"
          >
            Type your text or paste
          </textarea>
        </div>
      </div>
      <div className="counter">
        <div className="count-box">
          <h1 className="characters">{char}</h1>
          <span>Characters</span>
        </div>
        <div className="count-box">
          <h1 className="words">{words}</h1>
          <span>Words</span>
        </div>
        <div className="count-box">
          <h1 className="reading-time">{time}</h1>
          <span>Reading time</span>
        </div>
      </div>

      <div>
        <footer>Made by Deepak Singh Mudila</footer>
      </div>
    </>
  );
}
export default Counter;