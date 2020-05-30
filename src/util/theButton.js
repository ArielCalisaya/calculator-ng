import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
/*------------------------------------------------
                      Counter
------------------------------------------------*/
const styles = (theme) => ({
  ...theme.styled,
});

const TheButton = ({ children }) => {
  let isOperator;

  isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  return (
    <Button

      id="button"
      size="large"
      color="secondary"
      variant="contained"
      className={`button ${isOperator(children) ? "" : "operator"}`}
    >
      {children}
    </Button>
  );
};
export default withStyles(styles)(TheButton);
