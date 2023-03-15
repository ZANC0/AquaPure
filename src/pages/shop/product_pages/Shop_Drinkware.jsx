import "../Shop_Style.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import {React, useCallback, useEffect, useState,useRef} from 'react';
import ShopNotification from "../ShopNotification";
import water from "../item_pages/shop_assets/water_bottle.PNG"
import bamboo from "../item_pages/shop_assets/BambooCup.png"
import mug from "../item_pages/shop_assets/Beverage Mug.png"
import flask from "../item_pages/shop_assets/metalFlask.png"
import filter from "../item_pages/shop_assets/water filter.png"







export default function Shop_appearal() {  
  const storeuserid = localStorage.getItem("user_ID");
  const [itemData,setitemData] = useState([]);
  const [user, setuser] = useState({
    eMail: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    addressLine2: "",
    addressLine1: "",
    addressTC: "",
    addressPostcode: "",
    doB: "",
    userId: ""
  });
  const [productData, setData] = useState([]);
  const productURL = 'http://localhost:8080/product'
  const [showpopup, setshowpopup] = useState(false)
  const [add_text,setadd_text] = useState("Add to cart")
  const productimg = {
    "Recycled Sports Bottle":water,
    "Bamboo Travel Cup":bamboo,
    "Coffee/Tea Hot Beverage Mug":mug,
    "Water Filter":filter,
    "Metal Flask":flask
  }
    const [check, setcheck] = useState("Add to cart");

    useEffect(()=>{
        loadUser();
        loadCart();
        loadProducts();
      },[])
 
  const loadUser = () => {
    axios.get(`http://localhost:8080/User/${localStorage.getItem("user_ID")}`)
    .then(res=>{
      setuser(res.data);
      console.log(res.data);
    })
  }
  
  const loadCart = () => {
    axios.get(`http://localhost:8080/item/user/${localStorage.getItem("user_ID")}`)
    .then(res=>{
      setitemData(res.data);
      console.log(res.data,"loaded in LOADCART()");
      
    }) 
  }

  const loadProducts = () =>{
    axios.get(productURL)
    .then(res => {
      setData(res.data)
    })
  }
  const [newEntry,setEntry] = useState();

  const postAdd = (productid,id) => {
    if(!user){
      return(window.location.href = "/accounts/login")
    }
    setshowpopup(true);
    setTimeout(()=>{
      setshowpopup(false)
    },2500)
    //new cart entry
    if(itemData.findIndex(item=>item.product_id === productid)===-1){
      console.log("created first entry")
      let id = Math.floor(Math.random(999)*100);
      console.log(id)
      axios.post(`http://localhost:8080/item`,{
        "id":id,
        "userid": storeuserid,
        "product_id":productid,
        "quantity":1
      }).then(res=>{loadCart();console.log(res.data);})
    }
    else{
      //increment
      itemData.map(item=>{
        if(item.product_id === productid){
          console.log("incremented")
          let add = item.quantity+1;
          axios.put(`http://localhost:8080/item/${item.id}`,{
          "quantity":add
          }).then(res=>{console.log(res.data);loadCart();})
          }         
      })
    }
    



  }

  
    
  return (
    <div className="wall" key={"shoppage"}>    
      
      <div className="page" >
      
        <h1 className="shop_title">AquaShop</h1>
        
        <nav>
          <ul className="item_list">
              {productData.map(product => {
                if(product.catagoryID === 1){ 
                  return(
                    <li className="item">
                        <Link to="/water_bottle"><img alt="water" className="item_img" src={productimg[product.product_name]}/></Link>
                        <p className="item_title" key={"watername"}>{product.product_name}</p>
                        <p className="item_price" key={"waterprice"}>£{product.product_price}</p>
                        <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{postAdd(product.productID);}}>{add_text}</button>
                    </li>
                  ) 
                }
                else{
                  return("")
                }
              }
              )
              }


          </ul>
        </nav>
        
        <ShopNotification trigger={showpopup} setTrigger={setshowpopup}>
                <center className="popupShop" onClick={()=>{setshowpopup(false)}}>
                  <h3>+1 Item to Cart</h3>
                </center>
        </ShopNotification>
        
        
        
      </div>
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
    </div>

    
  );
}






