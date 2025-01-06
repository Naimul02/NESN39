import React from 'react';
import RandomProductsInfo from '../../RandomProducts/RandomProductsInfo';
import YourReview from '../../YourReview/YourReview';
import CakeProducts from '../DiscountProducts/CakeProducts';
import Header from '../Header/Header';
import MilkProductsInfo from '../MilkProducts/MilkProductsInfo';
import Section2 from '../Section2/Section2';
import ShampooInfo from '../Shampoo/ShampooInfo';
import Sponsors from '../Sponsors/Sponsors';
import OurStore from '../OurStore/OurStore';


const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <Section2></Section2>
      <MilkProductsInfo></MilkProductsInfo>
      <RandomProductsInfo></RandomProductsInfo>
      <Sponsors></Sponsors>
      <CakeProducts></CakeProducts>
      <OurStore></OurStore>
      </div>
  );
};

export default Home;