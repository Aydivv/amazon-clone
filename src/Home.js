import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="PS5"
            price={500}
            image="https://www.nme.com/wp-content/uploads/2020/06/ps5-credit-sie@2000x1270.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Blink Mini | Compact indoor plug-in smart security camera, 1080p HD video, motion detection, Works with Alexa | 1 Camera"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71VEryDkYKL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Logitech MX Master 3 – Advanced Wireless Mouse for Mac, Ultrafast Scrolling, Ergonomic Design, 4000 DPI, Customisation, Energy Saving USB-C, Bluetooth, Apple MacBook, iPad Compatible  - Grey"
            price={62.37}
            image="https://m.media-amazon.com/images/I/61qITGm5YIL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="14-in-1 USB C Laptop Docking Station, 4K HDMI Dual/Triple Monitor USB-C Dock Hub"
            price={59.99}
            image="https://m.media-amazon.com/images/I/61ZV8pw0PnL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="WERTHERS Original Soft Caramels, 110g, Pack of 12"
            price={15.06}
            image="https://m.media-amazon.com/images/I/81PNEc6wTDS._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title='X= XG24CURV 23.8" Curved Full HD VA 75Hz Adaptive-Sync/FreeSync HDMI Gaming Monitor with Speakers'
            price={154.95}
            image="https://m.media-amazon.com/images/I/6179BUT-oiS._AC_SL1080_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
