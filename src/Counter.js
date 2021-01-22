import React,{useState} from "react";

const Counter = () => {

    const [text, setText] = useState(""); 
    const [char, setChar] = useState(0);
    const [words, setWords] = useState(0);
    const [time, setTime] = useState(0);

    const handleChange = (e) => {
       setText(e.target.value);
       let string = e.target.value;
       let len = string.length;

       let word = string.trim().split(" ");
       word = word.filter((words) => words !== "").length  // counts only valid words
       let readtime = word / 200;

       setChar(len);
       setWords(word);
       setTime(readtime); 
    }

    return (
      <>
        <textarea
          name="textarea"
          placeholder="Type text or paste"
          style={{width:"50em", height:"20em"}}
          value={text}
          onChange={handleChange}
          className="textarea"         
        >
        Type your text or paste
        </textarea>
            
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
      </>
    );
}
export default Counter;