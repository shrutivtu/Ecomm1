import React from 'react';
import classes from './checkout.module.css';
const Confirm = () => {
    return(
        <div className={classes.confirmwrapper}>
            <h1 className={classes.confirmheading}>Order Confirmed</h1>
            <div className={classes.circlebox}>
                <i className={["fa", "fa-check", classes.checkicon].join(' ')}></i>
            </div>    
        </div>
    )
}
export default Confirm;