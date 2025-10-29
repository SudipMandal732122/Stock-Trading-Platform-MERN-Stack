import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,

}){
  return (
    <div className='container mt-5 pt-4'>
      <div className='row'>
        <div className='col-lg-4 mt-5 pt-5 me-5'>

          <h2 className='fs-3 mb-4 mt-5 pt-3'>{productName}</h2>
          <p>{productDescription}</p>
 
          <a className="hover-black text-decoration-none" href={learnMore}>Learn more <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>

        </div>

        <div className='col-lg-6 ms-5'>
          <img className='hover-img' src={imageURL}/>
        </div>

      </div>
    </div>
  );
}

export default RightSection;