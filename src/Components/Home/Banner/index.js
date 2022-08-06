import React from 'react';
import "./styles.css"
import bannerImg from "./banner.png";
import Logo from '../../common/Logo';


const Banner = () => {
  return (
    <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <button>
          View Menu
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
  )
}

export default Banner