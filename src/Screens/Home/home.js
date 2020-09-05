import React from 'react';
import HeaderComponent from '../../Layouts/Header/header';
import FooterComponent from '../../Layouts/Footer/footer';
import Categories from '../../Components/Categories/categories';
import ProductsComponent from '../../Components/Products/products';

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <Categories />
            <ProductsComponent />
          </div>
          <div className='col-6'></div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Home;
