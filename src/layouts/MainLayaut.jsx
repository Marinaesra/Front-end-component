import React from 'react'
import { Outlet } from 'react-router'

const MainLayaut = () => {
  return (
/*style={{background-image: linear-gradient(rgb(255 255 255 / 0.3), rgb(255 255 255 / 0.3)), url(/image/imagen8.jpg);}}*/
/*style={{backgroundImage: `url(${fondo})`,backgroundSize: 'cover',backgroundPosition: 'center' minHeight: '100vh',}}*/
    <div >
        <Outlet/>
    </div>
  )
}

export default MainLayaut