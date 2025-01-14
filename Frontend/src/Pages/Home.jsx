import React from 'react';
// import ProductList from '../Component/Products/ProductList';
import Banner from '../Component/Common/Banner';
import Categories from './Categories';
import Collection from './Collection';

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />
      <Categories/>
      <Collection/>

      {/* Welcome Section */}
      {/* <section className="text-center py-10">
        <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
        <p className="text-gray-600 mt-2">Find the best products at unbeatable prices!</p>
      </section> */}

      {/* Product List Section */}
      {/* <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
          <ProductList />
        </div>
      </section> */}
    </div>
  );
};

export default Home;
