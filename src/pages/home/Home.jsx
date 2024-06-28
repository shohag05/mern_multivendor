import React from 'react'
import Hero from '../../components/hero/Hero';
import FlashSale from '../../components/flash-sale/FlashSale';
import TodaysDeal from '../../components/todays-deal/TodaysDeal';
import FeaturedCategories from '../../components/featured-categories/FeaturedCategories';
import BannerOne from '../../components/banner-one/BannerOne';
import FeaturedProducts from '../../components/featured-products/FeaturedProducts';
import BannerTwo from '../../components/banner-two/BannerTwo';

const Home = () => {



    return (
        <div>
            
            <Hero />

            <FlashSale />

            <TodaysDeal />

            <FeaturedCategories />

            <BannerOne />

            <FeaturedProducts />

            <BannerTwo />

        </div>
    )
}

export default Home;
