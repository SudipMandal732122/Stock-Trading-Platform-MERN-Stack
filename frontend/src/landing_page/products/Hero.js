import React from 'react';

function Hero() {
    return ( 
        <div className='container  mb-5 border-bottom p-5 '>
            <div className='pt-5 text-center pb-2 mb-5'>
                    <h1 className='fs-2'>Zerodha Products</h1>
                    <h4 className='text-muted fs-4 mt-3 mb-4 fw-semibold'>Sleek, modern, and intuitive trading platforms</h4>
                    <p>
                        Check out our <a className="hover-black text-decoration-none" href="#">investment offerings 
                        <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    </p>
            </div>
        </div>
     );
}

export default Hero;