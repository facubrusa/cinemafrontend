import React from 'react';
import Layout from '../components/Layout';
import BannerSlider from '../components/banner/BannerSlider';
import MoviesSlider from '../components/movies/MoviesSlider';

const Index = () => {
  return ( 
    <Layout>
        <BannerSlider />
        <MoviesSlider />
    </Layout>
  );
}
 
export default Index;