import React, { useEffect } from 'react';

function CartItems(props) {
  let total = 0;
  let cart = props.cart;
  let arr = [];

  useEffect(() => {
    cart.map(pro => {
      pro.filter(p => {
        if(p.id === cart[cart.length - 1][0].id){
          arr.push(p);
          if(arr.length > 1){
            cart.pop();
            props.handlePages(1);
            alert('Item is already in cart !!');
             
          }
        }
      })
    })
  }, [])


  return(
    <React.Fragment>
      { 
        cart.map(pro => 
          pro.map(p => { return(
          <div className="container mt-4 ">
            <div className="row mx-4">
              <div className="col-3">
              <img src={p.img} alt={p.name} className="img-fluid" style={{height: '15vh'}} />
              </div>
              <div className="col-3">
                <h2>{p.modal}</h2>
              </div>
              <div className="col-3">
                <h3>$ {p.price} </h3>
              </div>
              <div className="col-3">
                <input type="hidden" name="" value={ total += p.price }/>
                <button className="btn btn-sm btn-danger" onClick={() => props.deleteCart(2, p.id) }>Delete</button>
              </div>
            </div>
          </div>
         
        )
        }
        )
        )
      }
       {
        (total > 0) ? 
          <React.Fragment>
            <div className="container">
            <hr className="mx-4"/>
            <h3 className="float-right mr-4 bg-primary text-light px-2 py-1 rounded">Total : $ {total}</h3>
            </div>
          </React.Fragment>
         : <React.Fragment>
           <h1 className="text-danger text-center mt-5">!! Cart is Empty !!</h1>
         </React.Fragment>
       }
    </React.Fragment>
  )

}

export default CartItems
