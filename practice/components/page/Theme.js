import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid ,  Container} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 700,
  },
});

export default function Theme(props) {
  const classes = useStyles();
  

  return (
    <Container className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={props.value} onChange={props.handleChange}aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider defaultValue={30} />
    </Container>
  );
}
