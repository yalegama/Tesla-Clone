import { makeStyles } from "@material-ui/styles";
import React from "react";
import BodyContent from "../components/BodyContent";
import Header from "../components/Header";

const useStyles=makeStyles((theme)=>({
    bodyContent:{
        paddingTop:50
    }
}))

function HomePage(){
    const classes=useStyles();
    return(
        <div>
            <Header/>
            < BodyContent className={classes.bodyContent}/>
            
        </div>
    )
}

export default HomePage