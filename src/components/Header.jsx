import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import logo from "../images/logo.svg"

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
},
list:{
    display:'flex',
    textDecoration:'none'
},
menuItems:{
    textDecoration:'none',
    margin:14,
    color:'black',
    
},
menuIcon:{
    display:'flex'
},
icon:{
    textDecoration:'none',
    margin:10,
    color:'black'
},
listList:{
listStyle:'none'
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
                        src={logo} alt="" />
                    </a>
                </div>
                <div className={classes.menu}>
                    <ul className={classes.list}>
                        <li className={classes.listList}><a className={classes.menuItems} href="">Model S</a></li>
                        <li className={classes.listList}><a className={classes.menuItems} href="">Model 3</a></li>
                        <li className={classes.listList}><a className={classes.menuItems} href="">Model X</a></li>
                        <li className={classes.listList}><a className={classes.menuItems} href="">Model Y</a></li>
                        <li className={classes.listList}><a className={classes.menuItems} href="">Solar Roof</a></li>
                        <li className={classes.listList}><a className={classes.menuItems} href="">Solar Panels</a></li>
                    </ul>
                </div>
                <div>
                    <ul className={classes.menuIcon}>
                        <li className={classes.listList}><a className={classes.icon} href="">Shop</a></li>
                        <li className={classes.listList}><a className={classes.icon} href="">Accoount</a></li>
                        <li className={classes.listList}><a className={classes.icon} href="">Menu</a></li>
                    </ul>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
