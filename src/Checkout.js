import React from 'react';
import Axios from 'axios';
import classes from './checkout.module.css';
import { Link } from 'react-router-dom';
let count = 0;
let  i;
class Checkout extends React.Component {
    //console.log(props.productlist);
    state = {
        pdata: ''
    }
    getdata = (pid) => {
        console.log(pid);
        Axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${pid}`)
        .then(response => {
            this.setState({
                pdata: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    iterate(){
        for(i = 0 ; i < this.props.productlist.length ; i++){
            for(let key in this.props.productlist[i]){
                console.log(key);
                this.getdata(key);
                count = count + this.props.productlist[i][key];
            }
        }
    }
    componentDidMount(){
        this.iterate();
    }
    render(){
        return(
            <div className={classes.checkoutwrapper}>
                <div className={classes.leftcheckout}>
                    <h1>Total Count: {count}</h1>
                    <div className={classes.checkoutbox}>
                        <img src={this.state.pdata.preview} alt="" className={classes.checkoutimage}/>
                        <div className={classes.productdetail}>
                            <h3 className={classes.productname}>{this.state.pdata.name}</h3>
                            <p className={classes.productprice}>{this.state.pdata.price}</p>
                        </div>    
                    </div>    
                </div>
                <div className={classes.rightcheckout}>
                    <div className={classes.rightbox}>
                        <h3 className={classes.totalpricehead}>Total Price: {this.state.pdata.price*count}</h3>
                    </div>
                    <Link to={"/confirm"}>
                        <button className={classes.buynowbtn} onClick={()=> {this.props.handleCount()}}>Buy Now</button>
                    </Link>
                </div>    
            </div>
        )
    }
}
export default Checkout;