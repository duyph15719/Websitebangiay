import React from 'react'
import { Outlet } from 'react-router-dom'




const Layoutclient = () => {
  return (
    <div>
      <h1>Đức Mt</h1>
       <header>đây là header</header>
        <main>
            <Outlet />
        </main>

        <footer> đây là footer</footer>
    </div>
  )
}

export default Layoutclient