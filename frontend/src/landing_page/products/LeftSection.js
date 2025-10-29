import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,

}) {
    return ( 
        <div className='container mt-5 pt-4 mb-5'>
            <div className='row  mb-5'>
                <div className='col-lg-6 me-5  ms-5'>
                    <img className='hover-img' src={imageURL}/>

                </div>
                <div className='col-lg-4 mt-5 pt-2 ms-5 ps-5'>
                    <h2 className='fs-3 mb-4'>{productName}</h2>
                    <p>{productDescription}</p>

                    <div>
                        <a className="hover-black text-decoration-none me-5" href={tryDemo}>Try demo <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>

                        <a className="hover-black text-decoration-none ms-2" href={learnMore}>Learn more <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    </div>

                    <div className='mt-4'>
                        <a href={googlePlay}><img className='hover-img me-3' src="media\images\googlePlayBadge.svg"/></a>

                        <a href={appStore}><img className='hover-img' src="media\images\appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;