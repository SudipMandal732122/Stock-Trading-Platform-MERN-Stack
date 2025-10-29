import React from 'react';

function Award() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-lg-6  p-5 '>
                    <img src='media/images/largestBroker.svg' alt='Award Image' style={{width:"100%"}}/>

                </div>
                <div className='col-lg-6  p-5 mt-5 '>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Feature and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>

                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"95%"}}/>

                </div>
            </div>
        </div>
     );
}

export default Award;