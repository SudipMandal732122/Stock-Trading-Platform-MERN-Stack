import React from "react";


function OpenAccount() {

  
  const handleSignupClick = () => {
   window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}`;
  };
  return (
    <div className="container p-5  mt-5">
      <div className="row text-center">
        <h2 className='fs-3' > Open a Zerodha account</h2>
        <p className="mt-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className=" p-1 fs-5 btn btn-primary mt-3 mb-5 hover-button "
          onClick={handleSignupClick}
          
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
