import React from 'react'
import Nav from './Header/Nav'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
