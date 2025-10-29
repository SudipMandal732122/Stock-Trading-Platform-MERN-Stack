import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 pt-5 pe-5 pb-5'>
            <div className='row ps-2 mt-3  pt-5'>
                <div className='col-lg-6'>
                    <h2 className='mb-5 fs-2 '>Trust with confidence</h2>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='mb-5 text-muted'>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='mb-5 text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='mb-5 text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='mb-5 text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>

                </div>
                <div className='col-lg-6 mt-2 ps-2'>
                    <img src='media/images/ecosystem.png' style={{width:"100%"}} />
                    <div className='text-center mt-3' >
                        <a href='#' className='text-decoration-none me-5 hover-black'>
                            Explore our products 
                            <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
                        </a>
                        <a href='#' className='text-decoration-none hover-black'>
                            Try Kite demo  
                            <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;