import React from "react";

const Header = ({setCopy,setClear}) => {
    

    return (
      <>
        <h1>Counter Box </h1>
        <button className="copy" onClick={() => setCopy(true)}>           
          Copy
        </button>
        <button className="clear" onClick={() => setClear(true)}>           
          Clear
        </button>                                    
      </>
    );   
}

export default Header;