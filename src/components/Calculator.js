import React from "react";
import Input from "./Input";
import withStyles from "@material-ui/core/styles/withStyles";

// Reusable Button
import TheButton from "../util/theButton";

// Get styles 
const styles = (theme) => ({
  ...theme.styled,
});

// Calculator and numbers row
const Calculator = () => {
  return (
    <div className="container">
      <div className="row">
        <Input />
      </div>
      <TheButton
        editButton={{ width: "100%", height: "32px", fontFamily: "cursive" }}
      >
        clear
      </TheButton>

      <div className="row">
        <TheButton>7</TheButton>
        <TheButton>8</TheButton>
        <TheButton>9</TheButton>
        <TheButton>÷</TheButton>
      </div>

      <div className="row">
        <TheButton>4</TheButton>
        <TheButton>5</TheButton>
        <TheButton>6</TheButton>
        <TheButton>X</TheButton>
      </div>
      <div className="row">
        <TheButton>1</TheButton>
        <TheButton>2</TheButton>
        <TheButton>3</TheButton>
        <TheButton>+</TheButton>
      </div>
      <div className="row">
        <TheButton editButton={{ borderBottomLeftRadius: "12px" }}>.</TheButton>
        <TheButton>0</TheButton>
        <TheButton>=</TheButton>
        <TheButton editButton={{ borderBottomRightRadius: "12px" }}>-</TheButton>
      </div>
    </div>
  );
};

// It connects with global Styles and export Function 
export default withStyles(styles)(Calculator);
