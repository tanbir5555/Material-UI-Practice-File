import {
  Card,
  makeStyles,
  Paper,
  Typography,
  IconButton
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#ecfbf2',
    width: '100%',
    padding: '1.3em 1.3em'
  },
  card: {
    // padding:"0.5em 1em",
    display: 'inline-block'
  },
  beforeCard: {
    display: 'flex'
  },
  textArea: {
    marginLeft: '1rem'
  },
  PageIcon: {
    color: theme.palette.info.dark
  },
  subTitle: {
    opacity: '60%'
  },
  colorWhite:{
    color:"#151515"
  }
}));
function Page_header(props) {
  const { title, subtitle, icon } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0} square>
      <div className={classes.beforeCard}>
        <Card className={classes.card}>
          <IconButton className={classes.PageIcon}>{icon}</IconButton>
        </Card>
        <div className={classes.textArea}>
          <Typography  className={classes.colorWhite} variant='h6' color='initial'>
            {title}
          </Typography>
          <Typography
            className={`${classes.subTitle} ${classes.colorWhite}`}
            variant='subtitle2'
            color='initial'>
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default Page_header;
