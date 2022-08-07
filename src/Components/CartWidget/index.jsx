import React from 'react';
import './styles.css';
import {IoMdCart} from 'react-icons/io';
import { useContext } from 'react';
import { Shop } from '../../Contex/ShopContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
const {cart} = useContext(Shop)


  return (
    <Link to='/cart' className='a'>
      <IoMdCart className='tamano'/>
      {cart.length && <span>{cart.length}</span>}
    </Link>
  )
}

export default CardWidget