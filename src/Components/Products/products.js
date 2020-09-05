import React from 'react';
import ProductItemComponent from '../ProductItem/productItem';

const ProductsComponent = () => {
  return (
    <div className='row'>
      <div className='col-4'>
        <ProductItemComponent />
      </div>
      <div className='col-4'>
        <ProductItemComponent />
      </div>
      <div className='col-4'>
        <ProductItemComponent />
      </div>
    </div>
  );
};

export default ProductsComponent;
