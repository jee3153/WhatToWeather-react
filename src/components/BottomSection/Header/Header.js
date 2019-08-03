import React from 'react'
import Btn from '../Btn'

const Header = (props) => {
  return (
    <header className='Header dropdown-menu generic'>
      {props.children}
      {/* <Btn /> */}
      <hr className='hr' />
    </header>
  )
}

export default Header
