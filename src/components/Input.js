import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.styled,
});

const Input = (props) => {
  const { classes } = props;

  return (
    <div className={classes.inputStyle}>
        0
    </div>
  );
};
export default withStyles(styles)(Input);
