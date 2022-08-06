import React, {useRef} from 'react'
import ButtonCartCount from '../../Components/common/ButtonCartCount'
import Footer from '../../Components/common/Footer'
import Menu from '../../Components/common/Menu'
import Banner from '../../Components/Home/Banner';
import { menuItemsData } from '../../Components/common/Menu/data';

const Home = () => {
  const menuRef = useRef();
  
  const handleScrollMenu = () =>{
      menuRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div>
        <Banner handleScrollMenu={handleScrollMenu}/>
        <Menu list={menuItemsData} ref={menuRef}/>
        <Footer />
        <ButtonCartCount />
    </div>
  )
}

export default Home