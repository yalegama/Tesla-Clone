import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles=makeStyles((theme)=>({
back:{
    backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop")`,
      height:'100vh' ,
      width:"100vw",
      backgroundSize:'cover',
      backgroundPosition:'center'
},
text:{
    paddingTop:80
},
allText:{
    paddingTop:"15vh",
    textAlign:'center',
    color:'black'
},
smallText:{
    color:'black',
}
}))

function Section() {
    const classes=useStyles();
    return (
        <div className={classes.back}>
            <div style={{ 
      
    }}>
        <div className={classes.allText}>
        <Typography className={classes.text}
        variant="h4"
        >
            Model S
        </Typography>
        <Typography 
        >
        Order Online for <a 
        className={classes.smallText}
        href="">Touchless Delivery</a>
        </Typography>
        </div>
    </div>
        </div>
    )
}

export default Section
