import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

/*
  Here's the button that optimizes the code and 
  facilitates the manipulation and style of the children
*/

const styles = (theme) => ({
  ...theme.styled,
});

const TheButton = ({ children, editButton }) => {

/* 
  This variable allows to differentiate between operator 
  and number, therefore !isNaN, it returns a true boolean value, 
  if the value is a number next to the other specified variables 
 */
  let isOperator;

  isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "clear" || val === "=";
  };

  return (
    <Button
      id="button"
      size="large"
      color="secondary"
      variant="contained"
      style={editButton}
      className={`button ${isOperator(children) ? "" : "operator"}`}
    >
      {children}
    </Button>
  );
};
export default withStyles(styles)(TheButton);
