import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles=makeStyles((theme)=>({
appBar:{
    position:'fixed',
    backgroundColor:'transparent',
    
},
toolBar:{
    display:'flex',
    justifyContent:'space-between',


},
logo:{
    height:50,
    width:100,
},
list:{
    display:'flex',
    textDecoration:'none'
},
menuItems:{
    textDecoration:'none',
    margin:14,
    
},
menuIcon:{
    display:'flex'
},
icon:{
    textDecoration:'none',
    margin:10
}
}))

function Header() {
    const classes=useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <div>
                    <a href="">
                        <img 
                        className={classes.logo}
                        src="/images/logo.svg" alt="" />
                    </a>
                </div>
                <div className={classes.menu}>
                    <ul className={classes.list}>
                        <li><a className={classes.menuItems} href="">Model S</a></li>
                        <li><a className={classes.menuItems} href="">Model 3</a></li>
                        <li><a className={classes.menuItems} href="">Model X</a></li>
                        <li><a className={classes.menuItems} href="">Model Y</a></li>
                        <li><a className={classes.menuItems} href="">Solar Roof</a></li>
                        <li><a className={classes.menuItems} href="">Solar Panels</a></li>
                    </ul>
                </div>
                <div>
                    <ul className={classes.menuIcon}>
                        <li><a className={classes.icon} href="">Shop</a></li>
                        <li><a className={classes.icon} href="">Accoount</a></li>
                        <li><a className={classes.icon} href="">Menu</a></li>
                    </ul>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
