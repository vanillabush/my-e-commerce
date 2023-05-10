import React, { useState } from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/sanity.client';

const HeroBanner = ({ heroBanner,products}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="discount">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            {/* <button type="button" disabled>{heroBanner.buttonText}</button> */}
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p className='discount'>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner