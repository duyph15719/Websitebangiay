import React from 'react'
import { Outlet } from 'react-router-dom'




const Layoutclient = () => {
  return (
    <div>
       <header>đây là header aaaaaaaaaa</header>
        <main>
            <Outlet />
        </main>
        <footer> đây là footer</footer>
    </div>
  )
}

export default Layoutclient