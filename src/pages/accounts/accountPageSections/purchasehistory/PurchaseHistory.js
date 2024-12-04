import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChildComponent1 from "./testkitpurchasehistory/PurchaseHistoryTestkit";
import ChildComponent2 from "./shopPurchaseHistory/PurchaseHistoryShop";
import "./PurchaseHistory.css";

export default function ParentComponent() {
  const [displayChild, setDisplayChild] = useState(null);

  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }
  return (
    <div className="HistoryContainer">
      <div className="HistorySidebar">
        <button
          onClick={() => setDisplayChild("ChildComponent1")}
          className="Hist_Side_BTN"
        >
          Testkit Purchase History
        </button>
        <button
          onClick={() => setDisplayChild("ChildComponent2")}
          className="Hist_Side_BTN"
        >
          Product History
        </button>
      </div>
      <div className="HistChildContainer">
        {displayChild === "ChildComponent1" && <ChildComponent1 />}
        {displayChild === "ChildComponent2" && <ChildComponent2 />}
      </div>
    </div>
  );
}
