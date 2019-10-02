import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from './ProductProvider';


 function ProductDetail(props) {
  
  const {products} = useContext(MyContext);
  const [item, setItem] = useState([]);

  function detail(){
    const item = products.filter(pro => {
      if(pro.id === props.id){
        return pro
      }
    })

    setItem(item);
  };

  useEffect(() => {
    detail()
  },[])

    return (
      <React.Fragment>
            {
              item.map(pro => {
                return(
                  <div className="container mt-5   shadow">
                    <div className="row">
                      <div className="col-4 p-5">
                        <img src={pro.img} alt={pro.modal} className="img-fluid" />
                      </div>
                      <div className="col-8 bg-light p-4">
                        <h2>{pro.modal}</h2>
                        <button className="btn bg-primary btn-sm text-light mt-2">$ {pro.price}</button>
                        <h4 className="mt-3">Details</h4>
                        <hr/>
                        <p>Camera  - {pro.details.camera}</p>
                        <p>Ram  - {pro.details.ram}</p>
                        <p>Rom  - {pro.details.rom}</p>
                        <p>Battery  - {pro.details.bettry}</p>

                        <button className="btn btn-warning w-100" onClick={() => props.handleCart(2, pro.id)}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
      </React.Fragment>
    )
  }


export default ProductDetail
