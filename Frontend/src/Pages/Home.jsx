import React from 'react';
import ProductList from '../Component/Products/ProductList';
import Banner from '../Component/Common/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <h1>Welcome to Our Store</h1>
      <ProductList />
    </div>
  );
};

export default Home;
