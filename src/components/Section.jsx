import { Button, styled, Typography } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles=makeStyles((theme,props)=>({
back:{
      height:'100vh' ,
      width:"100vw",
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundImage:`url("https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop")`
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
},
button1:{
    backgroundColor:'black',
    color:'white',
    borderRadius:20,
    height:40,
    width:"15%",
    margin:10
},
button2:{
    backgroundColor:'white',
    borderRadius:20,
    height:40,
    width:"15%",
    margin:10
},
buttonGroup:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:500
},
line:{
    display:'flex',
    flexDirection:'column',
},
arrow:{
    color:'black',
    display:'flex',
    justifyContent:'center',
    marginLeft:910,
    fontSize:40,
    cursor:'pointer'
},
arrowContainer:{
    width:'100%'
}
}))

function Section({title,description1,description2,description3,button1,button2,backgroundImage,children, ...props}) {
    const classes=useStyles();
    const { firstStyle, secondStyle } = useStyles(props);
    return (
        <div className="wrap">
            <div  className={classes.back}>
            <div className={classes.line}>
            <div className={classes.allText}>
        <Typography className={classes.text}
        variant="h4"
        >
            {title}
        </Typography>
        <Typography 
        >
       {description1}{description3}<a 
        className={classes.smallText}
        href="">{description2}</a>
        </Typography>
        </div>
    <div className={classes.buttonGroup}>
    <Button
        className={classes.button1}
        >
            Customer Order
        </Button>
        <Button
        className={classes.button2}
        >
            Existing Inventory
        </Button>
    </div>
    <div className={classes.arrowContainer}>
    <KeyboardArrowDown className={classes.arrow}/>
    </div>
    </div>
        </div>
        </div>
    )
}

export default Section


