import React, { useState } from "react";
// import Input from "./Input";
import withStyles from "@material-ui/core/styles/withStyles";
import Keyboard from './Keyboard'

// Get styles
const styles = (theme) => ({
  ...theme.styled,
});

const Calculator = (props) => {
  const [data, setData] = useState("");
  const { classes } = props;


  let clearDigits = () => {
    setData("")
  }

  let writeOnData = (e) => {
    setData(e.target.value)
  }

  // It execute the calculation funcion on '=' button/value
  let targetButton = (value) => {
    if(value === '='){
      calculateIt()
    } else {
      setData(data +value)
    }
  }

  //eval calculates operations
  let calculateIt = () => {
    try {
      setData(eval(data))
    }
    catch(e){
      setData("Syntax ERROR")
    }
  }

  return (
    <div className="container">
      <div className="row">
        <input type="text" 
        onChange={writeOnData}
        value={data} 
        className={classes.inputStyle}/>

      </div>
        <Keyboard target={targetButton} clear={clearDigits}/>
    </div>
  );
};

// It connects with global Styles and export Function
export default withStyles(styles)(Calculator);
