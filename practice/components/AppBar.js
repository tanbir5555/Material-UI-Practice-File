import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { InputBase, makeStyles, IconButton, Badge,Container } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.info.dark,

  },
  searchicon: {
    color: theme.palette.info.light,
    marginRight: '0.2em'
  },
  searchBox: {
    background: theme.palette.primary.dark,
    borderRadius: '50px',
    padding: '0.2em 0.7em',
    fontWeight: '500',
    color: '#fff',
    width:"650px",
    
  },
  strongWord: {
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '1rem',
    borderBottom: '1px solid #fff'
  },
  iconDesign: {
    color: 'white'
  }
}));
function AppBarC(props) {
  const classes = useStyles();
  let [inputStyle,setInputStyle]=useState({})

 
  function focused(){
    setInputStyle(()=>{
      return {background:"#fff",color: '#000',}
    })
  }
  function unfocus(){
    setInputStyle(()=>{
      return {}
    })
  }

  return (
    <Container style={{marginBottom:"80px"}}>
      <AppBar position='fixed' color='primary'>
        <Grid style={{maxWidth:"1300px",margin:"auto"}} alignItems='center' container>
          <Grid item sm={2}>
            <Toolbar>
             <IconButton onClick={()=>{props.sideBarActive()}}>
             <MenuIcon  className={classes.iconDesign}/>
             </IconButton>
              <Typography  variant='h6'>Material-UI</Typography>
            </Toolbar>
          </Grid>
          <Grid item sm>
            {props.search !== '' ? (
              <>
                Searching for{' '}
                <strong className={classes.strongWord}>{props.search}</strong> keyword
              </>
            ) : (
              ''
            )}
          </Grid>

          <Grid style={{ display: 'flex', alignItems: 'center' }} item sm={5}>
            <InputBase
            style={inputStyle}
              onFocus={()=>focused()}
             
              onBlur={()=>{unfocus()}}
              className={classes.searchBox}
              startAdornment={<SearchIcon className={classes.searchicon} />}
              placeholder='Search'
              value={props.search}
              onChange={(e) => {
                props.changeSearch(e);
              }}></InputBase>
            <IconButton aria-label=''>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon className={classes.iconDesign} />
              </Badge>
            </IconButton>
            <IconButton aria-label=''>
              <Badge badgeContent={4} color='secondary'>
                <AccountCircleIcon className={classes.iconDesign} />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={0} color='secondary'>
                <PowerSettingsNewIcon className={classes.iconDesign} />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </Container>
  );
}

export default AppBarC;
