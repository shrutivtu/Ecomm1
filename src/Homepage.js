import React from 'react';
import classes from './App.module.css';
import Shopcards from './Shopcards';
class Homepage extends React.Component{
    render(){
        return(
            <div className={classes.wrapper}>
                <Shopcards />
            </div>
        )
    }
}
export default Homepage;