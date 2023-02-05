import "./Shop_Style.css";
import water from "./shop_assets/water_bottle.PNG";
import logo from "./shop_assets/aqlogo.png";
import { Await, Link } from "react-router-dom";
import axios from 'axios';
import {React, useEffect, useState} from 'react';





 
export default function Shop() {  
  const [post, setPosts] = useState('');
  const get_data = async () => {
    await axios.get('http://localhost:8080/product')
    .then(res =>{
      console.log(res)
      setPosts(res.data.content)
    })
};

  get_data();
  return (
    <div>    
      <div className="page">
        
        
        <h1 className="shop_title"> <img className="logo" src={logo}></img>Shop</h1>
        {/**score points */}
        <nav>
          <ul className="item_list">
            {/**
               * -Eco Based 650 ml Sports Bottle
               * -Recycled Tote Bag
               * -Bamboo Note book
               * -AquaPure sticker/badge
               * -Recycled Travel Cup
               * -Mug
               * -Water filter
               * -Hoodie
               * -T-Shirt
               * -Face Masks
               * -Cap
               * -Metal Bottle/flask
               * -Laptop pouch
               * -eco friendly phone case
               * -Backpack
               */}
            <li className="item">
              <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
              
              <p className="item_title"></p>
              <p className="item_price">£19.99</p>
              <button id="bottle" className="item_quick_add item_quick_add1" type="button">Quick Add</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}






