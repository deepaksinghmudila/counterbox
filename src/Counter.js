import React,{useState,useRef} from "react"; 
import "./index.css"; 

const Counter = () => {

    const [text, setText] = useState(""); 
    const [char, setChar] = useState(0);
    const [words, setWords] = useState(0);
    const [time, setTime] = useState(0);
    const [copy, setCopySuccess] = useState(false);

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

        e.target.focus();    //textAreaRef.current.focus();        
        setCopySuccess(true);              
     }
    
    const clearTextarea = () => {
        setText(""); setTime(0);
        setChar(0); setWords(0);                        
    }


    return (
      <>
        <div className="container">
          <div className="header">
            <h1>Counter Box </h1>
            <button className="copy" onClick={copyToClipboard}>
              Copy
            </button>
            <button className="clear" onClick={clearTextarea}>
              Clear
            </button>
          </div>
          <div className="text">
            <textarea
              name="textarea"
              placeholder="Type text or paste"
              style={{ width: "50em", height: "20em" }}
              value={text}
              onChange={handleChange}
              ref={textAreaRef}
              className="textarea"
            >
              Type your text or paste
            </textarea>
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
          <footer>             
            Made by Deepak Singh Mudila
          </footer>
           
        </div>
      </>
    );
}
export default Counter;