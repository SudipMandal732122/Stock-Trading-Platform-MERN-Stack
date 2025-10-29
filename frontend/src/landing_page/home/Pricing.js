import React from 'react';

function Pricing() {
    return (  
       <div className='container mt-4 mb-5'>
            <div className='row mb-5'>
                <div className='col-lg-4'>
                    <h2 className='mb-3 fs-3'>Unbeatable pricing</h2>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='#' className='text-decoration-none hover-black text-center' >
                        See pricing  
                        <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
                    </a>

                </div>
                <div className='col-lg-2'></div>
                <div className='col-lg-6 mb-5 '>
                    <div className='row text-center mb-4'>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>
                                Free equity delivery and <br/>direct mutual funds 
                            </p>
                        </div>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>

                        </div>
                    </div>

                </div>
            </div>
       </div>
    );
}

export default Pricing;