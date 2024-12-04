import "./testkit.css";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Chatbot from "../phasetest/Phasetest";
import Footer from "../../components/Footer";
import Poppup from "../../components/Popup";
import { Link } from "react-router-dom";

export default function Testkit() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const wrapperRef = useRef(null);

  function toggleAquabotVisibility() {
    setIsChatbotVisible(!isChatbotVisible);
  }

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsChatbotVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const [value4, setValue4] = useState(1);
  const [value5, setValue5] = useState(1);
  const [value6, setValue6] = useState(1);
  const [value7, setValue7] = useState(1);

  const handleDecrement = (setValue) => {
    setValue((value) => (value > 1 ? value - 1 : 1));
  };

  const handleIncrement = (setValue) => {
    setValue((value) => (value < 7 ? value + 1 : 7));
  };
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const storedUserID = localStorage.getItem("user_ID");
    if (storedUserID) {
      setUserID(storedUserID);
    }
  }, []);

  const useTestKit = (id) => {
    const [testKit, setTestKit] = useState({
      test_Kit_Name: "",
      test_Kit_Price: "",
      test_Kit_Stock_Count: "",
      test_Kit_ID: ""
    });

    useEffect(() => {
      loadTestkit(id);
    }, []);

    const loadTestkit = async (id) => {
      const result = await axios.get(
        `http://localhost:8080/Test_Kit/${id}`
      );
      setTestKit(result.data);
    };
    return testKit;
  }

  const testKit1 = useTestKit(1);
  console.log(testKit1)
  const testKit2 = useTestKit(2);
  const testKit3 = useTestKit(3);
  const testKit4 = useTestKit(4);
  const testKit5 = useTestKit(5);
  const testKit6 = useTestKit(6);
  const testKit7 = useTestKit(7);


  const [user, setUser] = useState({
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

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/User/${localStorage.getItem("user_ID")}`
    );
    setUser(result.data);
  };

  const signUp = {
    "userId": user.userId,
    "eMail": user.eMail,
    "password": user.password,
    "firstName": user.firstName,
    "lastName": user.lastName,
    "doB": user.doB,
    "phoneNumber": user.phoneNumber,
    "addressLine1": user.addressLine1,
    "addressPostcode": user.addressPostcode,
    "addressLine2": user.addressLine2,
    "addressTC": user.addressTC
  };

  let BasicData = {
    "testKit": {
      "test_Kit_Stock_Count": testKit1.test_Kit_Stock_Count,
      "test_Kit_Name": testKit1.test_Kit_Name,
      "test_Kit_Price": testKit1.test_Kit_Price,
      "test_Kit_ID": testKit1.test_Kit_ID
    },
    "signUp": signUp,
    "quantity": value1
  };
  let StandardData = {
    "testKit": {
      "test_Kit_Stock_Count": testKit2.test_Kit_Stock_Count,
      "test_Kit_Name": testKit2.test_Kit_Name,
      "test_Kit_Price": testKit2.test_Kit_Price,
      "test_Kit_ID": testKit2.test_Kit_ID
    },
    "signUp": signUp,
    "quantity": value2
  };
  let PlusData = {
    "testKit": {
      "test_Kit_Stock_Count": testKit3.test_Kit_Stock_Count,
      "test_Kit_Name": testKit3.test_Kit_Name,
      "test_Kit_Price": testKit3.test_Kit_Price,
      "test_Kit_ID": testKit3.test_Kit_ID
    },
    "signUp": signUp,
    "quantity": value3
  };
  let PremiumData = {
    "testKit": {
      "test_Kit_Stock_Count": testKit4.test_Kit_Stock_Count,
      "test_Kit_Name": testKit4.test_Kit_Name,
      "test_Kit_Price": testKit4.test_Kit_Price,
      "test_Kit_ID": testKit4.test_Kit_ID
    },
    "signUp": signUp,
    "quantity": value4
  };
  let LegionellaData = {
    "testKit": {
      "test_Kit_Stock_Count": testKit5.test_Kit_Stock_Count,
      "test_Kit_Name": testKit5.test_Kit_Name,
      "test_Kit_Price": testKit5.test_Kit_Price,
      "test_Kit_ID": testKit5.test_Kit_ID
    },
    "signUp": signUp,
    "quantity": value5
  };
  let BacteriaData = {
    "testKit": {
      "test_Kit_Stock_Count": testKit6.test_Kit_Stock_Count,
      "test_Kit_Name": testKit6.test_Kit_Name,
      "test_Kit_Price": testKit6.test_Kit_Price,
      "test_Kit_ID": testKit6.test_Kit_ID
    },
    "signUp": signUp,
    "quantity": value6
  };
  let PoolData = {
    "testKit": {
      "test_Kit_Stock_Count": testKit7.test_Kit_Stock_Count,
      "test_Kit_Name": testKit7.test_Kit_Name,
      "test_Kit_Price": testKit7.test_Kit_Price,
      "test_Kit_ID": testKit7.test_Kit_ID
    },
    "signUp": signUp,
    "quantity": value7
  };
  const AddBasic = () => {
    if (!userID) {
      return (window.location.href = "/accounts/login");
    }
    axios.post('http://localhost:8080/TestkitCartItem', BasicData)
      .then(res => {
        console.log("okay")
        console.log(res);
        setButtonPopup(true)
      })
      .catch(err => {
        console.error(err);
      });
  }
  const AddStandard = () => {
    if (!userID) {
      return (window.location.href = "/accounts/login");
    }
    axios.post('http://localhost:8080/TestkitCartItem', StandardData)
      .then(res => {
        console.log(res);
        setButtonPopup(true)
      })
      .catch(err => {
        console.error(err);
      });
  }
  const AddPlus = () => {
    if (!userID) {
      return (window.location.href = "/accounts/login");
    }
    axios.post('http://localhost:8080/TestkitCartItem', PlusData)
      .then(res => {
        console.log(res);
        setButtonPopup(true)
      })
      .catch(err => {
        console.error(err);
      });
  }
  const AddPremium = () => {
    if (!userID) {
      return (window.location.href = "/accounts/login");
    }
    axios.post('http://localhost:8080/TestkitCartItem', PremiumData)
      .then(res => {
        console.log(res);
        setButtonPopup(true)
      })
      .catch(err => {
        console.error(err);
      });
  }
  const AddLegionella = () => {
    if (!userID) {
      return (window.location.href = "/accounts/login");
    }
    axios.post('http://localhost:8080/TestkitCartItem', LegionellaData)
      .then(res => {
        console.log(res);
        setButtonPopup(true)
      })
      .catch(err => {
        console.error(err);
      });
  }
  const AddBacteria = () => {
    if (!userID) {
      return (window.location.href = "/accounts/login");
    }
    axios.post('http://localhost:8080/TestkitCartItem', BacteriaData)
      .then(res => {
        console.log(res);
        setButtonPopup(true)
      })
      .catch(err => {
        console.error(err);
      });
  }
  const AddPool = () => {
    if (!userID) {
      return (window.location.href = "/accounts/login");
    }
    axios.post('http://localhost:8080/TestkitCartItem', PoolData)
      .then(res => {
        console.log(res);
        setButtonPopup(true)
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
      <div className="Testing_banner"></div>
      <div>
        <center>
          <h1 className="WQTK_h1">Water Quality Testing Kits</h1>
          <h2>AquaPure Offers Fast Analysis Kits For Your Drinking Water</h2>
          <div className="Test_Kit_Info">
            <p>
              Were you aware that in the UK, the water supplying organizations'
              responsibility ends at the external tap of your property? Which in
              other words mean that the water supply connectivity within your
              household is your responsibility. And it is commonly overseen the
              material quality which can lead to substances such as copper,
              nickel, and lead which are harmful to be leaked into your drinking
              water. Consuming the toxins within the water might host a serious
              disease which are often unnoticed for a long duration of time. As
              such due to this phenomenon is why the experts recommend to have
              water quality been tested regularly within the UK. Whatever your
              reason might be, whether you are having new baby in the house,
              moved into a new place, or as simple as you take safety and health
              of your family seriously, AquaPure test kits allow you to test
              your water quality and get the results as accurate as laboratory
              analysis at the convenience of your home, office or any other
              location.
            </p>
          </div>
          <br />
          <h2>
            Help AquaPure to Provide The Community Accurate Water Quality Data
          </h2>
          <div className="Test_Result_Map">
            <p>
              Over 70,000 of the AquaPure users provided their results to help
              us update the map to provide a better visual understanding to
              water quality in the UK to the community. Help us by joining in to
              this noble cause and provide us the results of your test to make
              the map as accurate as possible!
            </p>
          </div>
          <br />
          <div className="Test_Kit_Catalogue">
            <h2>AquaPure Water Testing Kits</h2>
            <p>
              AquaPure provides a range of water testing kits that are suitable
              to vairous applications and to meet your needs. All the kits
              contain instruction of how to collect and test the water sample.
            </p>
          </div>
        </center>
        {/* Test Kit Options */}
        <div className="Test_Kit_Grid">
          {/* Basic Kit */}
          <div className="Basic_Test_Kit">
            <div className="Basic_Img"></div>
            <div className="Basic_Details WTK">
              <h5>Water Test Kit | {testKit1.test_Kit_Name}</h5>
              <h6>8 Contaminants Based Testing Kit</h6>
              <p>
                Gives an overview of the state of the pipes in your homes.
                Prescribed for anybody who needs to actually look at the
                material and state of their lines or to try testing the water
                state in their coffee machines.
              </p>
              <div className="Basic_price WTK_P">
                <span>£{testKit1.test_Kit_Price}.00</span>
                <br />
                <br />
                <div>
                  <button className="Quantity_Changer" onClick={() => handleDecrement(setValue1)}>-</button>
                  <input className="Quantity_Input" value={value1} readOnly />
                  <button className="Quantity_Changer" onClick={() => handleIncrement(setValue1)}>+</button>
                </div>
                <br />
                <button id="WTK_P_CART" onClick={AddBasic}>Add To Cart</button>
              </div>
            </div>
          </div>
          {/* Standard Kit */}
          <div className="Standard_Test_Kit">
            <div className="Standard_Img"></div>
            <div className="Standard_Details WTK">
              <h5>Water Test Kit | {testKit2.test_Kit_Name}</h5>
              <h6>19 Contaminants Based Testing Kit</h6>
              <p>
                Our most popular water test examines your drinking water for
                numerous heavy metals, minerals, hardness, and other
                contaminants. Recommended for serious health-conscious
                individuals.
              </p>
              <div className="Standard_price WTK_P">
                <span>£{testKit2.test_Kit_Price}.00</span>
                <br />
                <br />
                <div>
                  <button className="Quantity_Changer" onClick={() => handleDecrement(setValue2)}>-</button>
                  <input className="Quantity_Input" value={value2} readOnly />
                  <button className="Quantity_Changer" onClick={() => handleIncrement(setValue2)}>+</button>
                </div>
                <br />
                <button id="WTK_P_CART" onClick={AddStandard}>Add To Cart</button>
              </div>
            </div>
          </div>
          {/* Plus Kit */}
          <div className="Plus_Test_Kit">
            <div className="Plus_Img"></div>
            <div className="Plus_Details WTK">
              <h5>Water Test Kit | {testKit3.test_Kit_Name}</h5>
              <h6>32 Contaminants Based Testing Kit</h6>
              <p>
                Testing for 32 possible pollutants, the PLUS is a far reaching
                water test checking for different weighty metals and nitrogen
                compounds. Recommended for people who suffer from allergies and
                are chronically ill, but not limited to.
              </p>
              <div className="Plus_price WTK_P">
                <span>£{testKit3.test_Kit_Price}.00</span>
                <br />
                <br />
                <div>
                  <button className="Quantity_Changer" onClick={() => handleDecrement(setValue3)}>-</button>
                  <input className="Quantity_Input" value={value3} readOnly />
                  <button className="Quantity_Changer" onClick={() => handleIncrement(setValue3)}>+</button>
                </div>
                <br />
                <button id="WTK_P_CART" onClick={AddPlus}>Add To Cart</button>
              </div>
            </div>
          </div>
          {/* Premium Kit */}
          <div className="Premium_Test_Kit">
            <div className="Premium_Img"></div>
            <div className="Premium_Details WTK">
              <h5>Water Test Kit | {testKit4.test_Kit_Name}</h5>
              <h6>50 Contaminants Based Testing Kit</h6>
              <p>
                A comprehensive examination of the water's quality, including
                testing for a variety of metals, minerals, and nitrogen
                compounds. Recommended for allergy sufferers, landlords,
                businesses, medical facilities, and other drinking
                water-supplying establishments.
              </p>
              <div className="Premium_price WTK_P">
                <span>£{testKit4.test_Kit_Price}.00</span>
                <br />
                <br />
                <div>
                  <button className="Quantity_Changer" onClick={() => handleDecrement(setValue4)}>-</button>
                  <input className="Quantity_Input" value={value4} readOnly />
                  <button className="Quantity_Changer" onClick={() => handleIncrement(setValue4)}>+</button>
                </div>
                <br />
                <button id="WTK_P_CART" onClick={AddPremium}>Add To Cart</button>
              </div>
            </div>
          </div>
          {/* Legionella Kit */}
          <div className="Legionella_Test_Kit">
            <div className="Legionella_Img"></div>
            <div className="Legionella_Details WTK">
              <h5>Water Test Kit | {testKit5.test_Kit_Name}</h5>
              <h6>Legionella Based Testing Kit</h6>
              <p>
                Since Legionella microscopic organisms is generally spread
                through water fume, testing all your water sources, for example,
                regular water, climate control systems and showers, is
                suggested. Prescribed for property managers who supply water to
                outsiders.
              </p>
              <div className="Legionella_price WTK_P">
                <span>£{testKit5.test_Kit_Price}.00</span>
                <br />
                <br />
                <div>
                  <button className="Quantity_Changer" onClick={() => handleDecrement(setValue5)}>-</button>
                  <input className="Quantity_Input" value={value5} readOnly />
                  <button className="Quantity_Changer" onClick={() => handleIncrement(setValue5)}>+</button>
                </div>
                <br />
                <button id="WTK_P_CART" onClick={AddLegionella}>Add To Cart</button>
              </div>
            </div>
          </div>
          {/* Bacteria Kit */}
          <div className="Bacteria_Test_Kit">
            <div className="Bacteria_Img"></div>
            <div className="Bacteria_Details WTK">
              <h5>Water Test Kit | {testKit6.test_Kit_Name}</h5>
              <h6>2 Contaminants Based Testing Kit</h6>
              <p>
                E. coli and coliform bacteria, two well-known pathogens that can
                be found in drinking water, are tested for. Recommended for
                anyone who is concerned that the water they use to drink may
                contain harmful bacteria.
              </p>
              <div className="Bacteria_price WTK_P">
                <span>£{testKit6.test_Kit_Price}.00</span>
                <br />
                <br />
                <div>
                  <button className="Quantity_Changer" onClick={() => handleDecrement(setValue6)}>-</button>
                  <input className="Quantity_Input" value={value6} readOnly />
                  <button className="Quantity_Changer" onClick={() => handleIncrement(setValue6)}>+</button>
                </div>
                <br />
                <button id="WTK_P_CART" onClick={AddBacteria}>Add To Cart</button>
              </div>
            </div>
          </div>
          {/* Pool Kit */}
          <div className="Pool_Test_Kit">
            <div className="Pool_Img"></div>
            <div className="Pool_Details WTK">
              <h5>Water Test Kit | {testKit7.test_Kit_Name}</h5>
              <h6>7 Contaminants Based Testing Kit</h6>
              <p>
                The pool water test examines the pH level and water hardness of
                your pool and bathing water, as well as any potentially harmful
                pathogens or microbiological contamination.
              </p>
              <div className="Pool_price WTK_P">
                <span>£{testKit7.test_Kit_Price}.00</span>
                <br />
                <br />
                <div>
                  <button className="Quantity_Changer" onClick={() => handleDecrement(setValue7)}>-</button>
                  <input className="Quantity_Input" value={value7} readOnly />
                  <button className="Quantity_Changer" onClick={() => handleIncrement(setValue7)}>+</button>
                </div>
                <br />
                <button id="WTK_P_CART" onClick={AddPool}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* Test Kit Options End */} <br />
        <br />
        <br />
      </div>
      <Poppup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <center><h3>The Test Kit Was Successfully Added To The Cart!</h3>
          <br />
          <button className="Cont_Btn" onClick={() => { setButtonPopup(false) }}>Continue Browsing</button>
          <Link className="Checkout_Btn" to="/cart">View Cart</Link></center>
      </Poppup>
      <div ref={wrapperRef}>
        {isChatbotVisible ? (
          <Chatbot />
        ) : showButton ? (
          <button
            className="AquaBot_button"
            onClick={toggleAquabotVisibility}
          />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

//Test kit boxes
// https://ivario-lab.co.uk/collections/water-test-kit#product-start