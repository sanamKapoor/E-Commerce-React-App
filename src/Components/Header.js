import React from 'react'

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <button className="bg-transparent border-0 navbar-brand" onClick={() => props.pageRender(1)} >Shopme.in</button>
      <button className="btn btn-warning btn-sm ml-auto" onClick={() => props.pageRender(2)}>Cart Items</button>
    </nav>
  )
}

export default Header
