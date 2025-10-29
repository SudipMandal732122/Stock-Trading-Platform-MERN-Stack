import React from 'react';

function Education() {
    return (  
        <div className='container mt-5 mb-5'>
            <div className='row mt-5'>
                <div className='col-lg-6 mt-3'>
                    <img src='media/images/education.svg' style={{width:"80%"}}/>

                </div>
                <div className='col-lg-6 mt-5 mb-5'>
                    <h2 className='fs-3'>Free and open market education</h2>
                    <p className='mt-3 mb-3'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='#' className='text-decoration-none hover-black'>
                        Varsity  
                        <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                    <p className='mt-5 mb-3'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='#' className='text-decoration-none hover-black'>
                        TradingQ&A   
                        <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;