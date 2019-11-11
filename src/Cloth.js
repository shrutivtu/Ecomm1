import React from 'react';
import classes from './App.module.css';
import { Link } from 'react-router-dom';
class Cloth extends React.Component{
    render(){
        let clothcards = this.props.clothitem.map(item => {
            return(
                <div className={classes.productcard} key={item.id}>
                    <Link to={`/product/${item.id}`}>
                        <img src={item.photos[0]} alt="" className={classes.cardimg} />
                    </Link>
                    <h3 className={classes.productname}>{item.name}</h3>
                    <p className={classes.brandname}>{item.brand}</p>
                    <p className={classes.price}>Rs {item.price}</p>
                </div>
            );
        })
        return(
            <div className={classes.clothSec}>
                {clothcards}
            </div>
        );
    }
}
export default Cloth;