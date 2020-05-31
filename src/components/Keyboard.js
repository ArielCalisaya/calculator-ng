import React from "react";
// Reusable button
import TheButton from "../util/theButton";


//Keyboard settings

const Keyboard = (props) => {
    const {target, clear} = props

    let targetKey = (e) => {
        target(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

  return (
    <div >
      <TheButton
        onClick={clear}
        editButton={{ width: "100%", height: "32px", fontFamily: "cursive" }}
      >
        clear
      </TheButton>
      <div className="row">
        <TheButton value="7" onClick={targetKey}>7</TheButton>
        <TheButton value="8" onClick={targetKey}>8</TheButton>
        <TheButton value="9" onClick={targetKey}>9</TheButton>
        <TheButton value="/" onClick={targetKey}>÷</TheButton>
      </div>

      <div className="row">
        <TheButton value="4" onClick={targetKey}>4</TheButton>
        <TheButton value="5" onClick={targetKey}>5</TheButton>
        <TheButton value="6" onClick={targetKey}>6</TheButton>
        <TheButton value="*" onClick={targetKey}>x</TheButton>
      </div>
      <div className="row">
        <TheButton value="1" onClick={targetKey}>1</TheButton>
        <TheButton value="2" onClick={targetKey}>2</TheButton>
        <TheButton value="3" onClick={targetKey}>3</TheButton>
        <TheButton value="+" onClick={targetKey}>+</TheButton>
      </div>
      <div className="row">
        <TheButton value="." onClick={targetKey}
        editButton={{ borderBottomLeftRadius: "12px" }}>
          .
        </TheButton>
        <TheButton value="0" onClick={targetKey}>0</TheButton>
        <TheButton value="=" onClick={targetKey}>=</TheButton>
        <TheButton value="-" onClick={targetKey} 
        editButton={{ borderBottomRightRadius: "12px" }}>
          -
        </TheButton>
      </div>
    </div>
  );
};

export default Keyboard;
