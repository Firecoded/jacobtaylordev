
import React from "react"

import "./layout.css"
import MainMenu from "./main-menu"

const Layout = ({ children }) => {
  return (
    <div>
        <MainMenu/>
        {children}
    </div>
  )
}

export default Layout
