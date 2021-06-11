import React from 'react';
import {withStyles} from '@material-ui/core';
const styleWork = {
  sidebar: {
    position: 'fixed',
    top: 0,
   
    width: '400px',
    height: '100vh',
    backgroundColor: 'rgb(18, 38, 63)'
  }
};

const SideMenu = (props) => {
  const {classes } = props;
  // const classes=useStyles()
  // console.log(Classes)
  console.log(classes)
  return <div style={props.left} className={classes.sidebar}>  </div>;
};

export default withStyles(styleWork)(SideMenu);
