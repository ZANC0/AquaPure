import "./item_frame_style.css";
import backpack from "./shop_assets/APBackpack.png";
import { Link } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import back_btn from "../item_pages/shop_assets/back_arrow_icon.png"

export default function Backpack() {


  const [productData, setData] = useState([]);
  const [cartItems,setcartItems] = useState([]);
  const [item,setvalue] = useState(1);
  const [user, setuser] = useState(null);
  const storeuserid = localStorage.getItem("user_ID")
  const itempageid = 15;


  useEffect(()=>{
    loadProducts();
    loadItems();
  },[])

  const loadProducts = () => {
    axios.get('http://localhost:8080/product')
    .then(res => {
      setData(res.data)
    })
  }
  const loadItems = () => {
    axios.get(`http://localhost:8080/item/user/${localStorage.getItem("user_ID")}`).then(res=>{setcartItems(res.data);})
    setuser(storeuserid)
  }
  


  
  useEffect(()=>{
    updateStates(setvalue)
  },[productData])

  const updateStates = ()=>{
    cartItems.map(item=>{
      if(item.product_id === itempageid){
        const increment = item.quantity+1
        setvalue(increment)  
      }
    })
  }

  

  const postAdd = (productid,quantity) => {
    updateStates();
    if(!user){
      return(window.location.href = "/accounts/login")
    }
    console.log(quantity,"the quantity of item in cart")
    cartItems.map(item=>{
      if(productid === item.product_id){
        setvalue((increment)=>(increment+1))
        console.log("running itemdata map incrementation")
        axios.put(`http://localhost:8080/item/${item.id}`,{
          "quantity":quantity
        }).then(res=>{console.log("incremented",res.data);loadItems();})
      }
    })
    if(quantity===1){
      let id = Math.floor(Math.random(999)*100);
      console.log(id)
      axios.post(`http://localhost:8080/item`,{
      "id":id,
      "userid": storeuserid,
      "product_id":productid,
      "quantity":quantity
    }).then(res=>{console.log(res.data);loadItems();})
    }
    }

    return(
      <div>
        <Link to='/shop'><button className="back"><img className="back-img" src={back_btn}></img></button></Link>
        <div className="page_item">
          
          

          <center>
            <img alt="water" className="item_page_img" src={backpack}/>
          </center>
          
          <div className="item_page_text">
          {productData.map(product => {
            if(product.productID === itempageid){
              return(
                <>
                  <h1 className="title" key={product}>{product.product_name}</h1>
                  <h1 className="price">£{product.product_price}</h1>
                  <Link to='/cart'><button className="add" type="button" onClick={()=>postAdd(product.productID,item)}>Add to Cart</button></Link>
                  <h2>Description</h2>
                  <h3 className="desc">{product.product_desc}</h3>
                </>
              )
            }
            else{
              return("")
            }
            })}
          </div>
        </div>
      </div>
    );
  }
  