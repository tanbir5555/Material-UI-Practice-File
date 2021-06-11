import React from 'react';
import {
  makeStyles,
  Paper,
  Button
} from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '300px',
    height: '100vh',
    zIndex: 100,
    top: '64px',
    transition: '0.3s',
    background: theme.palette.primary.dark,
    overflow: 'auto',
    padding: '0.8em 1em'
  },
  menubutton: {
    padding: '0.6em 1em',
    background: theme.palette.primary.light,
    marginBottom: '0.7em',
    fontWeight: '500',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '2px 2px 5px #00000040',
    width: '100%',
    textAlign: 'left',
    '&:hover': {
      background: '#fff',
      color: '#000'
    }
  }
}));
function SideBar(props) {
  // let [style_root,setRootStyle]=useState({})

  const class_ = styles();
  return (
    <Paper elevation={6} style={props.open} className={class_.root}>
      <Button onClick={()=>{props.page("page0")}} className={class_.menubutton}>
        Home
      </Button>
      <Button onClick={()=>{props.page("services")}} className={class_.menubutton}>
        Services
      </Button>
      <Button onClick={()=>{props.page("contacts")}} className={class_.menubutton}>
        Contacts
      </Button>
      <Button onClick={()=>{props.page("about")}} className={class_.menubutton}>
        About
      </Button>
      <Button onClick={()=>{props.page("theme")}} className={class_.menubutton}>
        Theme
      </Button>
    </Paper>
  );
}

export default SideBar;
