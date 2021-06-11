import React from 'react';
import { Card, Paper, Typography,Button } from '@material-ui/core';
import Page_header from './Page_header'
import PeopleIcon from '@material-ui/icons/People';
function PageOne(props) {
  let classes = props.styles();
 
  return (
    <div style={props.marginStyle} className={classes.container}>
     
      {/* <Typography variant='h6'>Page-1</Typography>
      <Paper elevation={0} square>
          <div className=''>  
          <Card>

          </Card>
           </div>
      </Paper> */}
      {/* <Button style={{color: 'white'}}>Hello</Button> */}
    </div>
  );
}

export default PageOne;
