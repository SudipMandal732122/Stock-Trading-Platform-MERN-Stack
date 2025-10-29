import React from 'react';

function Hero() {
    return (  
        <div className='container'>
            <div className='row border-bottom mt-5 p-5 text-center'>
                <h2>Pricing</h2>
                <h3 className='text-muted fs-5 mt-3'>
                    Free equity investment and flat ₹20 traday and F&O trades
                </h3>
            </div>
            <div className='row mt-5 p-4 text-center'>
                <div className='col-lg-4 p-4'>
                    <img src='media\images\pricingEquity.svg'/>
                    <h2 className='fs-3'>
                        Free equity delivery
                    </h2>
                    <p className='text-muted mt-4'>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.

                    </p>
                </div>
                <div className='col-lg-4 p-4'>
                    <img src='media\images\intradayTrades.svg'/>
                    <h2 className='fs-3'>
                        Intraday and F&O trades
                    </h2>
                    <p className='text-muted mt-4'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.

                    </p>
                </div>
                <div className='col-lg-4 p-4'>
                    <img src="media\images\pricingMF.svg"/>
                    <h2 className='fs-3'>
                        Free direct MF
                    </h2>
                    <p className='text-muted mt-4'>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                        
                    </p>
                </div>
                

            </div>
        </div>
    );
}

export default Hero;