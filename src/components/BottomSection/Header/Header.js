import React from 'react'


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
