import React from 'react';
import Homepage from './Homepage.js';
import Productdetail from './Productdetail.js';
import Checkout from './Checkout';
import Header from './Header';
import Footer from './Footer';
import Confirm from './Confirm';
import { Route, BrowserRouter as Router, Switch }  from 'react-router-dom';
let objarr=[];
let obj={};
let c = 0;
class App extends React.Component{
  //state = initialState
  state = {
    cartCount: 0,
    prodObj: []
  }
  dataHandler(pdata){
    let v = ++c;
    if(Object.keys(obj).length === 0){
      obj[pdata.id] = v;
    }else{
      obj[pdata.id] = v;
    } 
    if(objarr.length===0){
      objarr.push(obj);
    }else{
      for(let i = 0;i < objarr.length;i++){
        if(objarr[i].hasOwnProperty(pdata.id)){
          objarr.splice(i,1);
          objarr.push(obj);
        }
      }
    }
  }
  btnClick = (pdata) => {
    //const {cartCount} = this.state;
    this.setState(prevState => {
      return{
        cartCount: prevState.cartCount + 1
      }
    })
    this.dataHandler(pdata);
  }
  handleCount = () => {
    this.setState({
      cartCount: 0
    })
  }
  render(){
    return(
      <div>
        <Router>
          <div>
                <Header cartCount={this.state.cartCount}/>
                <Switch>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/product/:pId" render={(props) =>
                        <Productdetail {...props} 
                          btnClick={this.btnClick}
                        />
                    }
                  />
                  <Route path="/checkout" render={(props) => 
                    <Checkout {...props}
                    productlist={objarr}  
                    handleCount={this.handleCount}
                    />
                  }
                  />
                  <Route path="/confirm" component={Confirm}/>
                  </Switch>
                <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
