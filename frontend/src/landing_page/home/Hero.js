import React from 'react';



function Hero() {


  const handleSignupClick = () => {
   window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/signup`;
  };
    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1> Invest in everything</h1>
                <p className='mt-2'>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button style={{width:"20%",margin:"0 auto"}} className=' p-1 fs-5 btn btn-primary mt-3 mb-5 hover-button '
                onClick={handleSignupClick}
                >Signup Now</button>
            </div>
        </div>
        
    );
}

export default Hero;