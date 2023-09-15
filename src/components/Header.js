import React, { useState } from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
      {
        props.orders.map(el => (
          <Order key={el.id} item={el} onDelete={props.onDelete}/>
        ))}
      <p className='summa'>Сума: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='emty'>
      <h2>Корзина пуста</h2>
    </div>
  )
}

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false)
  return <header className='header'>
    <div>
      <a href='#' className='logo'>House Staff</a>
      <ul className='nav'>
        <li>Про нас</li>
        <li>Контакти</li>
        <li>Кабінет</li>
      </ul>
      <AiOutlineShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && "active"}`} />
      {cartOpen && (
        <div className='shop-cart'>
          {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
        </div>
      )}
    </div> 
    <div className='presentation'></div>
  </header>;
}


export default Header;