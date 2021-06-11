import React from 'react';
import { makeStyles, Paper,IconButton,Typography } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
const styles = makeStyles((theme) => ({
  root: {
   marginBottom:"10px"
  },
  IconPaper: {
    width: '60px',
    height:"60px",
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center",
    marginRight:theme.spacing(2)

  },
  IconPeople: {
    fontSize: "20px",
    color:theme.palette.primary.main,
  
    
  },
  cardContainer:{
      display: 'flex',
      
  }
}));
function PageHeader(props) {
  const classes = styles();
  return (
    <div className={classes.root}>
     <div className={classes.cardContainer}>
     <Paper className={classes.IconPaper} elevation={2}>
        <IconButton className={classes.IconPeople} aria-label="" >
        <PeopleIcon />
        </IconButton>
      </Paper>
      <div>
          <Typography variant='h6'>{props.header}</Typography>
          <Typography variant="subtitle2">{props.subtitle}</Typography>
      </div>
     </div>

    </div>
  );
}

export default PageHeader;
