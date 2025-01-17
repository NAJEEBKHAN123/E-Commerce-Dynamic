import React from 'react';
import Banner from '../Component/Common/Banner';
import Categories from './Categories';
import Collection from '../Component/Collection/Collection';
import Banner2 from '../Component/Banner2.jsx/Banner2';

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />
      <Categories/>
      <Collection/>
      <Banner2/>
    </div>
  );
};

export default Home;
