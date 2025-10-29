import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      

      {allOrders.length > 0 && (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price}</td>
                    <td
                      style={{
                        color: stock.mode === "BUY" ? "#16A34A" : "#DC2626",
                        fontWeight: "bold",
                        fontSize:"13px",
                      }}
                    >
                      {stock.mode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </>
      )}
      {(!allOrders || allOrders.length === 0) && (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders</p>
            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
