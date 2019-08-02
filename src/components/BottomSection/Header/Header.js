import React from 'react'

const Header = (props) => {
  return (
    <header className='Header dropdown-menu generic'>
      {props.children}
    </header>
  )
}

export default Header
