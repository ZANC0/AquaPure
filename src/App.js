import Navbar from "./components/Navbar";
import Donations from "./pages/donations/Donations";
import DonationForm from "./pages/donations/DonationForm";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Phasetest from "./pages/phasetest/Phasetest";
import Map from "./pages/map/Map";
import SignIn from "./pages/accounts/signin/SignIn";
import Testkit from "./pages/testkit/Testkit";
import SignUp from "./pages/accounts/signup/SignUp";
import PasswordSettings from "./pages/accounts/accountPageSections/PasswordSettings";
import PurchaseHistory from "./pages/accounts/accountPageSections/purchasehistory/PurchaseHistory";
import LoyaltyPoints from "./pages/accounts/accountPageSections/LoyaltyPoints";
import Testkitlog from "./pages/admin/TestKit_Admin/Testkitlog";
import Overwritetestkitlog from "./pages/admin/TestKit_Admin/Overwritetestkitlog";
import Signupadminlog from "./pages/admin/User_Admin/Signupadminlog";
import Overwritesignupadminlog from "./pages/admin/User_Admin/Overwritesignuplog";
import AdminPage from "./pages/admin/AdminPage";
import TermsAndContitions from "./pages/accounts/signup/TextFiles/TermsAndConditions";
import PrivacyPolicy from "./pages/accounts/signup/TextFiles/PrivacyPolicy";
import TestkitEntry from "./pages/accounts/accountPageSections/TestkitEntry";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./pages/accounts/cart/MainCartPage";
import Account from "./pages/accounts/accountPageSections/Accounts";
import Item_page from "./pages/shop/item_pages/item_frame";
import Shop from "./pages/shop/Shop";
import CheckOut from "./pages/shop/checkout";
import Water_Bottle_page from "./pages/shop/item_pages/water_bottle";
import Tote_bag_page from "./pages/shop/item_pages/tote_bag";
import Bamboo_notebook from "./pages/shop/item_pages/Bamboo_notebook";
import Sticker from "./pages/shop/item_pages/sticker";
import Tshirt from "./pages/shop/item_pages/T-Shirt";
import Beverage_mug from "./pages/shop/item_pages/beverage_mug";
import Water_filter from "./pages/shop/item_pages/water_filter";
import Mask from "./pages/shop/item_pages/mask";
import Cap from "./pages/shop/item_pages/cap";
import Flask from "./pages/shop/item_pages/flask";
import Pouch from "./pages/shop/item_pages/pouch";
import Phone_case from "./pages/shop/item_pages/phone_case";
import Backpack from "./pages/shop/item_pages/Backpack";
import Hoodie from "./pages/shop/item_pages/hoodie";
import Travel_cup from "./pages/shop/item_pages/travel_cup";
import Shop_purchase from "./pages/accounts/accountPageSections/purchasehistory/shopPurchaseHistory/PurchaseHistoryShop";
import PurchaseHistoryTestkit from "./pages/accounts/accountPageSections/purchasehistory/testkitpurchasehistory/PurchaseHistoryTestkit.css";
import PurchaseHistoryShop from "./pages/accounts/accountPageSections/purchasehistory/shopPurchaseHistory/PurchaseHistoryShop";
import ShopCart from "./pages/accounts/cart/shopcart/ShopCartPage"
import Shop_Appearal from "./pages/shop/product_pages/Shop_Appearal";
import Shop_Drinks from "./pages/shop/product_pages/Shop_Drinkware"
import Shop_Other from "./pages/shop/product_pages/Shop_Other"
import Shop_Tech from "./pages/shop/product_pages/Shop_Tech";
// import { Route, Routes } from "react-router-dom";

function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const location = useLocation();

  const [accountType, setAccountType] = useState(null);

  useEffect(() => {
    setAccountType(localStorage.getItem("accountType"));
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, scrollPos);
  // }, [location.pathname]);

  // useEffect(() => {
  //   setScrollPos(window.pageYOffset);
  // }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donations/DonationForm" element={<DonationForm />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/game" element={<Game />} />
          <Route path="/accounts/login" element={<SignIn />} />
          <Route path="/map" element={<Map />} />
          <Route path="/testkit" element={<Testkit />} />
          <Route path="/accounts/signup" element={<SignUp />} />
          <Route path="/accounts" element={<Account />} />
          <Route
            path="/accounts/passwordSettings"
            element={<PasswordSettings />}
          />
          <Route
            path="/accounts/purchaseHistory"
            element={<PurchaseHistory />}
          />
          <Route path="/accounts/loyaltyPoints" element={<LoyaltyPoints />} />
          <Route path="/phasetest" element={<Phasetest />} />
          {accountType === "Admin" ? (
            <Route path="/admin/testkitlog" element={<Testkitlog />} />
          ) : null}
          {accountType === "Admin" ? (
            <Route
              exact
              path="/admin/testkitlog/overwrite/:test_Kit_ID"
              element={<Overwritetestkitlog />}
            />
          ) : null}
          <Route path="/shoppurchase" element={<PurchaseHistoryShop/>}/>
          <Route path="/testkitpurchase" element={<PurchaseHistoryTestkit />} />

          {accountType === "Admin" ? (
            <Route path="/admin" element={<AdminPage />} />
          ) : null}
          {accountType === "Admin" ? (
            <Route
              path="admin/signuplog/overwrite/:user_ID"
              element={<Overwritesignupadminlog />}
            />
          ) : null}
          {accountType === "Admin" ? (
            <Route path="/admin/signuplog" element={<Signupadminlog />} />
          ) : null}

          <Route path="/cart" element={<Cart />} />
          <Route path="/shopcart" element={<ShopCart/>}/>
          <Route path="/termsAndConditions" element={<TermsAndContitions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/accounts/testkitEntry" element={<TestkitEntry />} />
          <Route path="/item" element={<Item_page />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/water_bottle" element={<Water_Bottle_page />} />
          <Route path="/tote_bag" element={<Tote_bag_page />} />
          <Route path="/bamboo" element={<Bamboo_notebook />} />
          <Route path="/sticker" element={<Sticker />} />
          <Route path="/travel_cup" element={<Travel_cup />} />
          <Route path="/shop_purchase" element={<Shop_purchase />} />
          <Route path="/beverage_mug" element={<Beverage_mug />} />
          <Route path="/water_filter" element={<Water_filter />} />
          <Route path="/hoodie" element={<Hoodie />} />
          <Route path="/T-shirt" element={<Tshirt />} />
          <Route path="/flask" element={<Flask />} />
          <Route path="/pouch" element={<Pouch />} />
          <Route path="/phone_case" element={<Phone_case />} />
          <Route path="/backpack" element={<Backpack />} />
          <Route path="/cap" element={<Cap />} />
          <Route path="/mask" element={<Mask />} />
          <Route path='/shop/Shop_Appearal' element={<Shop_Appearal/>}/>
          <Route path='/shop/Shop_Drinks' element={<Shop_Drinks/>}/>
          <Route path="/shop/Shop_Other" element={<Shop_Other/>}/>
          <Route path="/shop/Shop_Tech" element={<Shop_Tech/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
