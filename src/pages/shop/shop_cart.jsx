import { Await, Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import "./cartStyle.css"
import water from "./shop_assets/water_bottle.PNG"

export default function Shop_cart() {

    const [cartItems, setcartItems] = useState([]);
    const [productData, setData] = useState([]);
    const [count, setcount] = useState(0);
    const [subtotal, setsubtotal] = useState(0);
    const [points, setpoints] = useState(2500);
    

    

    
    
    useEffect(() => {
      loadItems();
      loadProducts();
      
    },[]);

    useEffect(()=>{
      total();
      
    },[cartItems])
    
    const loadProducts = () => {
      axios.get('http://localhost:8080/product')
      .then(res => {
        setData(res.data)
      })
     
    }
    const loadItems = () => {
      axios.get('http://localhost:8080/item')
      .then(res => {
        setcartItems(res.data)
        console.log("load cart")
      })
    }

    const total = () => {
      var total_price = 0;
      cartItems.map(item => {
        productData.map(product => {
          if(item.product_id === product.productID){
            total_price += product.product_price*item.quantity
            console.log("calc total")
          }
        })
      })
      setsubtotal(total_price)
    }

    const apply_points = (points) => {
      if(!IsCheck){
        if(points>=100){
          console.log("discounted")
          let discount = points/1000;
          let newtotal = subtotal-discount
          setsubtotal(newtotal);
          console.log(newtotal,"new total")
        }
      }
      else if(IsCheck){
        console.log("discounted revoked")
        let discount = points/1000;
        let newtotal = subtotal+discount
        setsubtotal(newtotal);
        console.log(newtotal,"new total")
      }
    }

    const deleteItem = async (id) => {
      await axios.delete(`http://localhost:8080/item/${id}`).then(console.log("deleted item"))
      // notEmpty=false;
      // console.log(notEmpty)
      loadItems();
    }

    const increment = (productid) => {
      cartItems.map(item => {
        if(productid === item.product_id){
            let add = item.quantity+1
            axios.post('http://localhost:8080/item',{
              'id':productid,
              'user_id':123123,
              'product_id':productid,
              'quantity':add
            }).then(res => {loadItems();console.log(res.data);})
        }
      })
    }

    const decrease = (productid) => {
      cartItems.map(item => {
        if(productid === item.product_id){
          if(item.quantity<=1){
            deleteItem(productid)
          }
          else{
            let add = item.quantity-1
            axios.post('http://localhost:8080/item',{
              'id':productid,
              'user_id':123123,
              'product_id':productid,
              'quantity':add
            }).then(res => {loadItems();console.log(res.data);})
          }
        }
      })
    }
    const [IsCheck,setcheck] = useState(false);
    const checkhandler = () => {
      setcheck(!IsCheck);
      apply_points(points);
    }
    return(
      <div>
        <div className="cart_page">
          <h1 className="cart_title">YOUR CART</h1>
          <span className="containerSum">
            <h3>subtotal</h3>
            <div className="discount">
              <label htmlFor="checkbox">Apply Points Discount</label>
              <input type="checkbox" checked={IsCheck} onChange={() => checkhandler()}></input>
            </div>
            <h2>£{subtotal}</h2>
              
              
            <Link to="/checkout"><button className="checkout">CHECKOUT</button></Link>
            </span>
            <table className="cart_items">
              <thead>
                <tr key={"headers"}>
                  <th className="item_image_header">PRODUCT</th>
                  <th className="th_product_header"></th>
                  <th className="quant_header" id="quantity">QUANTITY</th>
                  <th className="price_header" id="price">PRICE</th>
                  <th></th>
                </tr>
              </thead>
            
            {
              
              cartItems.map(item => {
                var notEmpty = true; 
                
                return(
                <>
                  {
                    productData.map(product => {
                      if (product.productID === item.product_id) {
                        return(<>{notEmpty ? <tbody>
                          <tr key={"cart"}>
                            <td><img className="item_image" src={water} alt="water"></img></td>
                            <td className="product_header" key={product.product_name}>{product.product_name}</td>
                            <td className="quant_td" key={count}><button className="quant_button" onClick={()=>{decrease(item.product_id);}}>-</button><p className="quant">{item.quantity}</p><button className="quant_button" onClick={()=>increment(item.product_id)}>+</button></td>
                            <td className="price_td" key={product.product_price}>£{product.product_price}</td>
                            <td><button className="delete_button" onClick={() => deleteItem(item.id)}>X</button></td>
                          </tr>
                          </tbody>
                           : ""}
                           </>)
                      }
                    })
                  }
                </>
                )
              })
            }
            </table>

            
        </div>
      </div>
    );
  }
  