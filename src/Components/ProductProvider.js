import React, { useState, useEffect } from 'react';
import AllProducts from './AllProducts';

export const MyContext = React.createContext();

function ProductProvider(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(AllProducts);
  }, [products]);

  return (
    <React.Fragment>
      <MyContext.Provider value={{ products}}>
        { props.children}
      </MyContext.Provider>
    </React.Fragment>
  )
}

export default ProductProvider
