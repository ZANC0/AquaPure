import "../Shop_Style.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import {React, useCallback, useEffect, useState,useRef} from 'react';
import ShopNotification from "../ShopNotification";
import Navbar from "../Shop_Navbar"
import pouch from "../item_pages/shop_assets/APPouch.png";
import phone from "../item_pages/shop_assets/PhoneCaseAP.png";
import backpack from "../item_pages/shop_assets/APBackpack.png"
import placeholder from "../item_pages/shop_assets/placeholder.jpg"
import back_btn from "../item_pages/shop_assets/back_arrow_icon.png"




export default function Shop_Tech() {  
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
    "Laptop Pouch":pouch,
    "Phone Case":phone,
    "BackPack":backpack,
  }
  const productlinks = {
    "Laptop Pouch":"/pouch",
    "Phone Case":"/phone_case",
    "BackPack":"/backpack",
  }
  
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
      console.log(res.data)
    })
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

    
  return (
    <div className="wall" key={"shoppage"}>    
      
      <div className="page" >
      
        <h1 className="shop_title">AquaShop</h1>
        <Navbar/>
        <Link to='/shop'><button className="back"><img className="back-img" src={back_btn}></img></button></Link>
        <nav>
          <ul className="item_list">
              {productData.map(product => {
                console.log(productlinks[product.product_name])
                if(product.catagoryID === 4){ 
                  return(
                    <li className="item">
                        <Link to={productlinks[product.product_name]}><img alt={placeholder} className="item_img" src={productimg[product.product_name]}/></Link>
                        <p className="item_title" key={"watername"}>{product.product_name}</p>
                        <p className="item_price" key={"waterprice"}>£{product.product_price}</p>
                        <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{postAdd(product.productID);}}>{add_text}</button>
                    </li>
                  ) 
                }
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






