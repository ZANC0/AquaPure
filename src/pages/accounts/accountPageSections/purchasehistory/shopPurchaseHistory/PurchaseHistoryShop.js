import { Link } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import "./PurchaseHistoryShop.css"
import tote from "../../../../shop/item_pages/shop_assets/AquaPureToteBag.png"
import notebook from "../../../../shop/item_pages/shop_assets/APNotebook.png"
import cup from "../../../../shop/item_pages/shop_assets/BambooCup.png"
import mug from "../../../../shop/item_pages/shop_assets/Beverage Mug.png"
import filter from "../../../../shop/item_pages/shop_assets/water filter.png"
import hoodie from "../../../../shop/item_pages/shop_assets/APHoodie.png"
import shirt from "../../../../shop/item_pages/shop_assets/tshirtAP.png"
import mask from "../../../../shop/item_pages/shop_assets/FaceMaskAP.png"
import cap from "../../../../shop/item_pages/shop_assets/APcap.png"
import flask from "../../../../shop/item_pages/shop_assets/metalFlask.png"
import pouch from "../../../../shop/item_pages/shop_assets/APPouch.png"
import phone from "../../../../shop/item_pages/shop_assets/PhoneCaseAP.png"
import backpack from "../../../../shop/item_pages/shop_assets/APBackpack.png"
import water from "../../../../shop/item_pages/shop_assets/water_bottle.PNG";
import sticker from "../../../../shop/item_pages/shop_assets/APSticker.png"
export default function PurchaseHistoryShop() {

    const [productData, setData] = useState([]);
    const [history, sethistory] = useState([]);
    const productimg = {
      "Recycled Sports Bottle": water,
      Backpack: backpack,
      "Phone Case": phone,
      "Laptop Pouch":pouch,
      "Metal Flask":flask,
      Cap:cap,
      "Face Mask Pack of 3":mask,
      "T-Shirt": shirt,
      Hoodie:hoodie,
      "Water Filter": filter,
      "Coffee/Tea Hot Beverage Mug": mug,
      "Bamboo Travel Cup":cup,
      "Bamboo Covered Note Book":notebook,
      "Recycled Tote Bag Large":tote,
      "AquaPure Sticker & Badge": sticker
  
    }

    const loadHistory = () => {
        axios.get(`http://localhost:8080/history/user/${localStorage.getItem("user_ID")}`).then(res=>{sethistory(res.data);console.log("histroy loaded")})
    }
    const loadProducts = () => {
      axios.get('http://localhost:8080/product').then(res=>{setData(res.data);console.log("loaded Data")})
    }
    useEffect(()=>{
        loadHistory();
        loadProducts();
    },[])

    return(
      <div>
        <div>
          <h1>Shop Purchase History</h1>
            <table className="purchase-table">
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Date</th>
            {
              history.sort((a, b) => new Date(b.date) - new Date(a.date)).map(purchase => {
                return(
                  productData.map(product=>{
                    if(product.productID === purchase.product_id){
                      return(
                      <tr>
                        <td><img className="productimg" src={productimg[product.product_name]}></img></td>
                        <td className="purchase-name">{product.product_name}</td>
                        <td className="purchase-price">£{product.product_price}</td>
                        <td>{purchase.quantity}</td>
                        <td>{purchase.date}</td>
                      </tr>
                      )
                    }
                  })
                )
              })
            }
            </table>
        </div>
      </div>
    );
  }
  