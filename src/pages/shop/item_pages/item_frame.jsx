import "./item_frame_style.css";
import water from "./shop_assets/water_bottle.PNG";
import { Link } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import back_btn from "../item_pages/shop_assets/back_arrow_icon.png"
export default function Item_page() {

  const [productData, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/product')
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  },[])
  

    return(
      <div>
        <Link to='/shop'><button className="back"><img className="back-img" src={back_btn}></img></button></Link>
        <div className="page_item">

          
          <center>
            
            <img alt="water" className="item_page_img" src={water}/>
          </center>
          
          <div>
          {productData.map(product => {
                if(product.productID === 1){
                  return(
                    <>
                      <h1 className="title item_page_text" key={product}>{product.product_name}</h1>
                    </>
                  )
                }
                else{
                  return("")
                }
                })}
            <button className="add item_page_text" type="button">Add to Cart</button>
          </div>

        </div>
      </div>
    );
  }
  