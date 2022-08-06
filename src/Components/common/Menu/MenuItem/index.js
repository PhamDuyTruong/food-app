import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../../Redux/Cart/cart-action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../Redux/Cart/cart-selector';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';


import "./styles.css";


const MenuItem = ({item, cartCount, cartList, cartAddItem, cartRemoveItem }) => {

  const { id, img, name, price, info } = item;

  const handleQuantity = () =>{
    let quantity = 0;
    if(cartCount !== 0){
        const found = cartList.find((item) => item.id === id);
        if(found){
          quantity = found.quantity
        }
    }
    return quantity;
  }

  return (
     <div className='item'>
      <img src={img} alt='food' />
      <div className='item-head_desc'>
        <p className='head_desc-name'>{name}</p>
        <p className='head_desc-info'>
          <small>{info}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>${price}</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
   cartCount: selectCartItemsCount,
   cartList: selectCartItems
});

const mapDispatchToProps = (dispatch) =>({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)