// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartIcon from '../../assets/images/icon-shopping-cart-white.svg'

const CartButton = styled.a`
  background: var(--main-color) url(${CartIcon}) no-repeat center / 40px 40px;
`;

export default function Cart() {
  return (
    <CartButton to='#' className='link-btn'/>
  )
}