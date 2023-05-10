import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 MarkHenry's Store All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook/>
      </p>
    </div>
  )
}

export default Footer