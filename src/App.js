import React from 'react';
import Header from './Components/Header';
import ProductProvider from './Components/ProductProvider';
import ProductConsumer from './Components/ProductConsumer';
import ProductDetail from './Components/ProductDetail';
import CartItems from './Components/CartItems';
import AllProducts from './Components/AllProducts';


class App extends React.Component {

  state = {
    pageIndex: 1,
    proId: '',
    cartId: '',
    cart: [],
    all: ''
  }

  handleIndex = index =>{
    switch(index){
      default:
      case 1:
          return(<ProductConsumer  handlePages={this.handlePages}  handleCart={this.handleCart} />);
      case 0:
        return(<ProductDetail id={this.state.proId} handlePages={this.handlePages} handleCart={this.handleCart}/>);
      case 2:
        return(<CartItems id={this.state.cartId}  cart={this.state.cart} deleteCart={this.deleteCart} handlePages={this.handlePages}/>);
    }
  }

  

  handlePages = (index, id) => {
    this.setState({
      pageIndex: index,
      proId: id
    })
  }
  
  handleCart = (index, id) => {
    this.setState({
      pageIndex: index,
      cartId: id
    })

    const item = AllProducts.filter(pro => {
      if(pro.id === id){
        return pro;
      }
    })

    
          let cart = this.state.cart;
          let all = this.state.all;
          all = [...cart];
          all.push(item);
          this.setState({
            cart: all
          })

      
  }

 


  deleteCart = (index, id) => {
    let items = this.state.cart.filter(pro => {
      if(pro[0].id !== id){
        return pro;
      }
    })

    this.setState({
      cart: items
    })

    this.setState({
      pageIndex: index,
      cartId: id
    })
  }

  

  pageRender = index => {
    this.setState({
      pageIndex: index
    })
  }
   
 render() {
  return (
    <React.Fragment>
        <ProductProvider>
          <Header pageRender={this.pageRender} />
          { this.handleIndex(this.state.pageIndex) }
        </ProductProvider>
    </React.Fragment>
  );
 }
}

export default App;
