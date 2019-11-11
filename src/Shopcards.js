import React from 'react';
import axios from 'axios';
import classes from './App.module.css';
import Cloth from './Cloth';
import Accessory from './Accessory';
class Shopcards extends React.Component{
    state = {
        productList : []
    }
    componentDidMount(){
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(response => {
            this.setState({
                productList : response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    productitem = this.state.productList.map(item => {
        return(
            item.isAccessory
        )
    });
    render(){
        const clothitem = this.state.productList.filter(item => {
            return(
                item.isAccessory === false
            )
        });
        const accessoryitem = this.state.productList.filter(item => {
            return(
                item.isAccessory === true
            )
        });
        return(
            <div className={classes.productWrapper}>
                <h2 className={classes.productheading}>
                    Clothing for Men and Women
                </h2>    
            <Cloth clothitem={clothitem}/>
                <h2 className={classes.productheading}>
                    Accessories for Men and Women
                </h2>
            <Accessory accessitem={accessoryitem} />
            </div>
        );
    }
}
export default Shopcards;