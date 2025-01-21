import "./Shop_Style.css";
import water from "./item_pages/shop_assets/water_bottle.PNG";
import logo from "./item_pages/shop_assets/APSticker.png"
import { Link } from "react-router-dom";
import axios from 'axios';
import {React, useCallback, useEffect, useState,useReducer} from 'react';
import placeholder from './item_pages/shop_assets/placeholder.jpg';
import ShopNotification from "./ShopNotification";
import clothes from "./item_pages/shop_assets/shirticon.png";
import drinkware from "./item_pages/shop_assets/cupicon.png"
import Navbar from "./Shop_Navbar.jsx"
import book from "./item_pages/shop_assets/APNotebook.png"
import hoodie from "./item_pages/shop_assets/APHoodie.png"
import pouch from "./item_pages/shop_assets/APPouch.png"
import sticker from "./item_pages/shop_assets/APSticker.png"
import tote from "./item_pages/shop_assets/AquaPureToteBag.png"
import cap from "./item_pages/shop_assets/APcap.png"
import cup from "./item_pages/shop_assets/BambooCup.png"
import mug from "./item_pages/shop_assets/Beverage Mug.png"
import mask from "./item_pages/shop_assets/FaceMaskAP.png"
import flask from "./item_pages/shop_assets/metalFlask.png"
import phone from "./item_pages/shop_assets/PhoneCaseAP.png"
import shirt from "./item_pages/shop_assets/tshirtAP.png"
import filter from "./item_pages/shop_assets/water filter.png"
import backpack from "./item_pages/shop_assets/APBackpack.png"

export default function Shop() {  
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
  const [check, setcheck] = useState("Add to cart");

  useEffect(()=>{
    loadUser();
    loadCart();
    loadProducts();
    console.log()

  },[])

  const loadProducts = () =>{
    axios.get(productURL)
    .then(res => {
      setData(res.data)
      console.log(res.data)
    })
  }

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
  

  const productimg = {
    "Recycled Sports Bottle":water,
    "Recycled Tote Bag Large":tote,
    "Bamboo Covered Note Book":book,
    "AquaPure Sticker & Badge":sticker,
    "Bamboo Travel Cup":cup,
    "Coffee/Tea Hot Beverage Mug":mug,
    "Water Filter":filter,
    "Hoodie":hoodie,
    "T-Shirt":shirt,
    "Face Mask Pack of 3":mask,
    "Cap":cap,
    "Metal Flask":flask,
    "Laptop Pouch":pouch,
    "Phone Case":phone,
    "BackPack":backpack,
  }
  const productlinks = {
    "Recycled Sports Bottle":"/water_bottle",
    "Recycled Tote Bag Large":"/tote_bag",
    "Bamboo Covered Note Book":"/bamboo",
    "AquaPure Sticker & Badge":"/sticker",
    "Bamboo Travel Cup":"/travel_cup",
    "Coffee/Tea Hot Beverage Mug":"/beverage_mug",
    "Water Filter":"/water_filter",
    "Hoodie":"/hoodie",
    "T-Shirt":"/T-shirt",
    "Face Mask Pack of 3":"/mask",
    "Cap":"/cap",
    "Metal Flask":"/flask",
    "Laptop Pouch":"/pouch",
    "Phone Case":"/phone_case",
    "BackPack":"/backpack",
  }

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
      let id = Math.floor(Math.random(999)*100)+1;
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
  const [showall, setshowall] = useState(false)
  const [disableviewall, setdisableviewall] = useState(false)
  const handleView = () => {
    setshowall(true);
    document.getElementById("viewall").remove();
  }

  
  return (
    <div className="wall" key={"shoppage"}>    
      
      <div className="page" >
      <h1 className="shop_title">AquaShop</h1>
      <Navbar/>
        <nav>
          <ul className="item_list">
            {
              productData.map(product=>{
                if(product.productID < 5)
                  return(
                    <li className="item">
                      <Link to={productlinks[product.product_name]}><img alt={placeholder} className="item_img" src={productimg[product.product_name]}/></Link>
                      <p className="item_title" key={"watername"}>{product.product_name}</p>
                      <p className="item_price" key={"waterprice"}>£{product.product_price}</p>
                      <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{postAdd(product.productID);}}>{add_text}</button>
                    </li>
                  )
              })
            }
            <br/>

            <button id="viewall" onClick={()=>(handleView())}>VIEW ALL PRODUCTS</button>
            {
              productData.map(product=>{
                if(showall && product.productID > 5)
                  return(
                    <li className="item">
                      <Link to={productlinks[product.product_name]}><img alt="water" className="item_img" src={productimg[product.product_name]}/></Link>
                      <p className="item_title" key={"watername"}>{product.product_name}</p>
                      <p className="item_price" key={"waterprice"}>£{product.product_price}</p>
                      <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{postAdd(product.productID);}}>{add_text}</button>
                    </li>
                  )
              })
            }
          </ul>
        </nav>
        
        <ShopNotification trigger={showpopup} setTrigger={setshowpopup}>
                <center className="popupShop" onClick={()=>{setshowpopup(false)}}>
                  <h3>+1 Item to Cart</h3>
                </center>
        </ShopNotification>
        
        
        
      </div>
    </div>
  );
}






