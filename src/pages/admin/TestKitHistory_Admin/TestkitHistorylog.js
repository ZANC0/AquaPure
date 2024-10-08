import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TestkitHistorylog.css";
import WaterTestKit1 from "../../testkit/testkit_images_videos/Basic.jpg";
import WaterTestKit2 from "../../testkit/testkit_images_videos/Standard.jpg";
import WaterTestKit3 from "../../testkit/testkit_images_videos/Plus.jpg";
import WaterTestKit4 from "../../testkit/testkit_images_videos/Premium.jpg";
import WaterTestKit5 from "../../testkit/testkit_images_videos/Legionella.jpg";
import WaterTestKit6 from "../../testkit/testkit_images_videos/Bacteria.jpg";
import WaterTestKit7 from "../../testkit/testkit_images_videos/Pool.jpg";
import { Link } from "react-router-dom";

export default function TestkitLog() {
  const [TestkitHistory, setTestkitHistory] = useState([]);
  useEffect(() => {
    loadTestkitHistory();
  }, []);

  const loadTestkitHistory = async () => {
    const Test_Kit_History = await axios.get(
      `http://localhost:8080/testkit/purchase-history`
    );
    console.log(Test_Kit_History.data);
    setTestkitHistory(Test_Kit_History.data);
  };

  const testKitImages = {
    Basic: WaterTestKit1,
    Standard: WaterTestKit2,
    Plus: WaterTestKit3,
    Premium: WaterTestKit4,
    Legionella: WaterTestKit5,
    "Bacteria Basic": WaterTestKit6,
    Pool: WaterTestKit7,
  };

  return (
    <div className="Testkit_log_Container">
      <table className="Test_Kit_Table">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User ID</th>
          <th scope="col">Testkit Type</th>
          <th scope="col">Unique Testkit ID</th>
          <th scope="col">Use Status</th>
          {/* <th scope="col">Action</th> */}
        </tr>
        {TestkitHistory.map((TestkitCartItems, index) => (
          <tr>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td>{TestkitCartItems.signUp.userId}</td>
            <td style={{ alignItems: "center" }}>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                }}
                src={testKitImages[TestkitCartItems.testKit.test_Kit_Name]}
                alt={TestkitCartItems.testKit.test_Kit_Name}
              />
            </td>
            <td className="Price_td">{TestkitCartItems.id}</td>
            <td>
              {TestkitCartItems.usestatus ? "Activated" : "Not Activated"}
            </td>
            {/* <td>
              <Link
                className="Edit_Kit_Price"
                to={`/admin/testkithistorylog/overwrite/${TestkitHistory.test_Kit_ID}`}
              >
                Overwrite
              </Link>
            </td> */}
          </tr>
        ))}
      </table>
    </div>
  );
}
