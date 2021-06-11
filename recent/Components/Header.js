import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  InputBase
} from '@material-ui/core';
import React, { useState } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GitHubIcon from '@material-ui/icons/GitHub';
import ChatIcon from '@material-ui/icons/Chat';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

import Page_header from './pages/Page_header'
import PeopleIcon from '@material-ui/icons/People';
const headerStyle = makeStyles(theme=>({
  root: {
    backgroundColor: '#1976d2',
    transform: 'translateZ(10000000000000000000000000000000)'

  },
  icon: {
    color: '#',
    // borderBottom:"1px solid white",
    fontSize: '1.5rem'
  },
  headerWork: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonIcon: {
    border: '0px solid #00000000',
    borderBottom: '0px solid #00000000',
    color: '#fff'
  },
  touchInputDesign: {
    width: '200px',
    backgroundColor: '#1976d2',
    borderRadius:'25px',
    color: '#fff',
    padding:"0.2em 1em",
   
    
  },
  account:{
    background: theme.palette.info.dark,
    '&: .MuiSvgIcon-root':{
      // color:'blue'
      paddingBottom: '1.5em'

    }

  },
  btnRoot:{
    backgroundColor:"#1976d2",
    boxShadow:'0px 0px 10px rgba(0,0,0,0.4)',
    "&:hover":{
      boxShadow:'0px 0px 15px rgba(0,0,0,0.6)',
    }

  },
  btnLabel:{
    backgroundColor:"#1976d2"
  },
  Page_header:{
    transform: 'translateZ(0)'

  }

}));

function Header(props) {
  const classes = headerStyle();
  const [inputStyle, setInputStyle] = useState({});
  const [focusd, setFocusd] = useState(false);
  function touchInput(){
    if(focusd===false){
      setInputStyle({backgroundColor:"#2063b5", width: '300px', boxShadow:"inset 0px 0px 8px #00000040"})
      setFocusd(true)
    }else{
      setInputStyle({})
      setFocusd(false)

    }
  }

  return (
    <div>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item sm={1}>
              <IconButton
                onClick={() => {
                  props.closeSidebar();
                }}
                onDoubleClick={() => {
                  props.closeSidebar();
                }}>
               {props.menuIcon} 
              </IconButton>
            </Grid>
            <Grid className={classes.headerWork} item sm>
              <Typography align='left' variant='h6' color='initial'>
                Material UI Tutorial
              </Typography>
            </Grid>
            <Grid item style={{display:'flex',alignItems:'center'}}>
              <InputBase
              className={classes.touchInputDesign}
                onFocus={() => {
                  touchInput();
                }}
                onBlur={()=>{
                  touchInput();
                }}
                style={inputStyle}
                startAdornment={
                  <SearchIcon size='small' style={{ marginRight: '0.5rem' }} />
                }
                placeholder='Search'></InputBase>
              {/* <Button
                style={{ backgroundColor: '#1b6cbc' }}
                className={classes.buttonIcon}
                variant='outlined'
                startIcon={<SearchIcon size='large' />}>
                <TextField
                  style={{ color: 'white' }}
                  className={classes.buttonIcon}
                  id=''
                  // label="Search"
                  // value={}
                  // onChange={}
                />
              </Button> */}
              <IconButton>
                <Badge badgeContent={5} color='secondary'>
                  <NotificationsIcon
                    // style={{ color: '#fff' }}
                    size='small'
                    className={classes.icon}
                  />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge color='secondary'>
                  <GitHubIcon
                    // style={{ color: '#fff' }}
                    size='small'
                    className={classes.icon}
                  />
                </Badge>
              </IconButton>
              <IconButton classes={{root: classes.btnRoot,label:classes.btnLabel}}>
                <Badge badgeContent={32} color='secondary'>
                  <ChatIcon
                    // style={{ color: '#fff' }}
                    className={classes.icon}
                  />
                </Badge>
              </IconButton>
              <IconButton className={classes.account}>
                <AccountCircleIcon 
                // style={{ color: '#fff' }} 
                size='small' />
              </IconButton>
              <IconButton>
                <PowerSettingsNewIcon
                  // style={{ color: '#fff' }}
                  size='small'
                  className={classes.icon}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Page_header
      className={classes.Page_header}
      title="Welcome"
      subtitle="Thanks for joining our team"
      icon={<PeopleIcon style={{fontSize:"1.9rem"}}/>}
      />
    </div>
  );
}

export default Header;
