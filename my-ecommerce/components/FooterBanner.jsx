import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/sanity.client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p className='discount'>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p className='discount'>{saleTime}</p>
        </div>
        <div className="right">
          <p className='discount'>{smallText}</p>
          <h3>{midText}</h3>
          <p className='discount'>{desc}</p>
          <Link href={`/product/${product}`}>
            {/* <button type="button" disabled>{buttonText}</button> */}
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner