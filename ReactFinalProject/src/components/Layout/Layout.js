import React from 'react'
import Header from '../Header/Header'
import Routers from '../../routers/Routers'
const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Routers/>
        </div>
       
    </div>
  )
}

export default Layout