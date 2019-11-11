import React from 'react';
import classes from './App.module.css';
import { Link } from 'react-router-dom';
class Header extends React.Component{
    render(){
        return(
            <div className={classes.header}>
                <div className={classes.logo}>
                    <h3 className={classes.logoName}>ShopLane</h3>
                </div>
                <div className={classes.sectionnames}>
                    <div className={classes.accessories}>Accessories</div>
                    <div className={classes.clothing}>Clothing</div>
                </div>
                <div className={classes.cartlogosec}>
                    <Link to={"/checkout"}>
                    <i className={["fas", "fa-shopping-cart", classes.cartlogo].join(" ")}></i>
                    </Link>
                    <span className={classes.numberofitems}>{this.props.cartCount}</span>
                </div>
            </div>
        );
    }
}
export default Header;