import React from 'react';
import {
  Container,
  
  makeStyles,
  Paper,
  Grid,
  IconButton
} from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PageHeader from './PageHeader'

const styles = makeStyles((theme) => ({
  root: {
    marginTop: '5rem'
  },
  paper: {
    padding: '0.8em 1em',
    lineHeight:"1.5em"
  },
  navigantion: {
    background: theme.palette.primary.main,
    height: '45px'
  },
  nav_icon: {
    fontSize: '1.3rem',
    color: '#fff'
  }
}));
function Page() {
    let [paperCom,setPaper]=React.useState(<PaperComponent/>)
    function CloseNav(){
        setPaper("")
    }

  function PaperComponent(){
      return(
        <Paper elevation={5}>
        <div className={cla.navigantion}>
          <Grid container alignItems='center'>
            <Grid item sm></Grid>
            <Grid item sm={1}>
              <IconButton  onClick={()=>{CloseNav()}}>
                <PowerSettingsNewIcon 
               
                className={cla.nav_icon} />
              </IconButton>
            </Grid>
          </Grid>
        </div>
        <div className={cla.paper}>
          Jerusalem. Soldiers sent by the bishop arrive to arrest Balian, but
          Godfrey refuses to surrender him, and in the ensuing attack, Godfrey
          is struck by an arrow that breaks off in his body, leaving a wound
          that would prove fatal days later. Jerusalem. Soldiers sent by the
          bishop arrive to arrest Balian, but Godfrey refuses to surrender
          him, and in the ensuing attack, Godfrey is struck by an arrow that
          breaks off in his body, leaving a wound that would prove fatal days
          later. Jerusalem. Soldiers sent by the bishop arrive to arrest
          Balian, but Godfrey refuses to surrender him, and in the ensuing
          attack, Godfrey is struck by an arrow that breaks off in his body,
          leaving a wound that would prove fatal days later. Jerusalem.
          Soldiers sent by the bishop arrive to arrest Balian, but Godfrey
          refuses to surrender him, and in the ensuing attack, Godfrey is
          struck by an arrow that breaks off in his body, leaving a wound that
          would prove fatal days later.
        </div>
      </Paper>
      )
  }  
  const cla = styles();
  return (
    <div className={cla.root}>
      <Container>
        <Grid container>
          <Grid item sm={3}>
          <PageHeader
          header="Home"
          subtitle="we are always with all People"
          />
          </Grid>
        </Grid>
       
       {paperCom}
      </Container>
    </div>
  );
}

export default Page;
