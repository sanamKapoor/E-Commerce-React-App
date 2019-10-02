import React, { useContext} from 'react';
import { MyContext } from './ProductProvider';

function ProductConsumer(props) {

  const {products} = useContext(MyContext);
  const {  handlePages, handleCart } = props;
  
  return (
    <div className="container mt-3">
      <div className="row">
      {
        products.map(pro => {
        return (
        
        <div className="card w-25 m-2 p-3"  key={pro.id}>
          <img src={pro.img} alt={pro.modal} className="card-img" style={{height: "30vh"}}></img>
          <div className="card-body">
            <h3>{pro.modal}</h3>
            <p>$ {pro.price}</p>

              <button type="submit" className="btn btn-info btn-sm" onClick={() => handlePages(0, pro.id)}>Detail</button>
              <button type="submit" className="btn btn-warning btn-sm ml-3" onClick={() => handleCart(2, pro.id)}>Add to Cart</button>
          </div>
        </div>
        
          )
        })
      }
      </div>
    </div>
  )
 }

export default ProductConsumer;
