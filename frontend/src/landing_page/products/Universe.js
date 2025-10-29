import React from 'react';
import { useNavigate } from "react-router-dom";

function Universe() {
    const navigate = useNavigate();
      
    const handleSignupClick = () => {
        window.location.href = "http://localhost:3001/signup";
    };
    return (  
        <div className='container mt-3 p-5'>
            <div className='row text-center'>
                <h2 className='fs-4 mb-4'>The Zerodha Universe</h2>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className='col-lg-4 p-3 mt-5' >
                    <img src='media\images\smallcaseLogo.png' className='hover-img mb-4'/>
                    <p className='text-muted px-5' style={{fontSize:"0.8rem" }}>
                        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-lg-4 p-3 mt-5' >
                    <img src='media\images\streakLogo.png' style={{width:"50%"}} className='hover-img mb-4'/>
                    <p className='text-muted px-5' style={{fontSize:"0.8rem"}}>
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>
                <div className='col-lg-4 p-3 mt-5' >
                    <img src='media\images\sensibullLogo.svg' style={{width:"58%"}} className='hover-img mb-4'/>
                    <p className='text-muted px-5' style={{fontSize:"0.8rem"}}>
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-lg-4 p-3 mt-3' >
                    <img src='media\images\zerodhaFundhouse.png' style={{width:"65%"}} className='hover-img mb-4'/>
                    <p className='text-muted px-5' style={{fontSize:"0.8rem"}}>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-lg-4 p-3 mt-3' >
                    <img src='media\images\goldenpiLogo.png' style={{width:"60%"}} className='hover-img mb-4'/>
                    <p className='text-muted px-5' style={{fontSize:"0.8rem"}}>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-lg-4 p-3 mt-3' >
                    <img src='media\images\dittoLogo.png' style={{width:"35%"}} className='hover-img mb-4'/>
                    <p className='text-muted px-5' style={{fontSize:"0.8rem"}}>
                        Personalized advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>
                <button 
                    style={{width:"20%",margin:"0 auto"}} 
                    className=' p-1 fs-5 btn btn-primary mt-4 mb-5 hover-button '
                     onClick={handleSignupClick}
                >   
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;