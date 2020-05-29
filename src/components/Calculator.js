import React from 'react';
import { Button } from '../util/theButton';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.styled
})

function Calculator(props) {
  const {classes} = props
    return (
      <div className="App">
      <div className={classes.buttonSize}>
        <div className="row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>/</Button>
        </div>
        <div className="row">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>X</Button>
        </div>
        <div className="row">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
        </div>
        <div className="row">
        <Button>.</Button>
        <Button>0</Button>
        <Button>-</Button>
        <Button>=</Button>
        </div>
      </div>

    </div>
  );
}


export default withStyles(styles)(Calculator);
