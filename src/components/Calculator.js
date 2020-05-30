import React from 'react';
import  TheButton  from '../util/theButton';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.styled
})

const Calculator = () => {

    return (
      <div className="container">
        <div className="row">
        <TheButton>7</TheButton>
        <TheButton>8</TheButton>
        <TheButton>9</TheButton>
        <TheButton>/</TheButton>
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
        <TheButton>.</TheButton>
        <TheButton>0</TheButton>
        <TheButton>-</TheButton>
        <TheButton>=</TheButton>
        </div>
      </div>
  );
}


export default withStyles(styles)(Calculator);
