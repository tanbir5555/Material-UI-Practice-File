import React from 'react'
import {Typography,Container} from '@material-ui/core'

function Error404(props) {
    return (
        <Container>
            <Typography variant="h1" color="primary">
               404 Error  
            </Typography>
            <Typography variant="subtitle1">
                {props.massages}
            </Typography>
        </Container>
    )
}

export default Error404
