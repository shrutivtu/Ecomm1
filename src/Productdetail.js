import React from 'react';
import Axios from 'axios';
import classes from './product.module.css';
class Productdetail extends React.Component{
    state = {
        currentImage: '',
        productData: [],
        images: []
    }
    /*_getId = () => {
        const {btnClick}  =this.props;
        btnClick(this.state.productData.id);
    }*/
    getData(){
        let pid = this.props.match.params.pId;
        if(pid !== null && pid !== undefined && pid !== '' && parseInt(pid) > 0){
            Axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${pid}`)
            .then(response => {
                this.setState({
                    productData : response.data,
                    currentImage: response.data.preview
                })
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    componentDidMount(){
        this.getData();
    }
    /*componentDidUpdate(){
        this.getData();
    }*/
    imageFunc(link){
        this.setState(prevState => {
            return{
                currentImage: link
            }
        })
    }
    
    render(){  
        return(
            <div className={classes.productwrapper}>
                <div className={classes.leftsection}>
                    <img src={this.state.currentImage}  alt="" className={classes.image}/>
                </div>
                <div className={classes.rightsection}>
                    <h2 className={classes.productname}>
                        {this.state.productData.name}
                    </h2>
                    <p className={classes.description}>{this.state.productData.description}</p>
                    <h3 className={classes.productprice}>Price: Rs {this.state.productData.price}</h3>
                    <h3 className={classes.selectimage}>Select Image</h3>
                    <div className={classes.imagesection}>
                        {
                            this.state.productData === null || this.state.productData.length === 0 ? []:
                            this.state.productData.photos.map((item,pos) => {
                                return(
                                    <div className={classes.smallbox} key={pos}>
                                        <img src={item} key={pos} alt="" className={classes.smallimg} onClick={()=>{this.imageFunc(item)}}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <button className={classes.cartbtn} onClick={()=>{this.props.btnClick(this.state.productData)}}>Add to Cart</button>
                </div>
            </div>
        )
    }
}
export default Productdetail;