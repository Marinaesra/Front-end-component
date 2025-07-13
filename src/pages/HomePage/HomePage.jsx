import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import Menucomponent from '../../components/MenuComponent/Menucomponent'
import ListaProductosComponent from '../../components/ListaProductosComponent/ListaProductosComponent'

const HomePage = () => {
  return (
    <div>
       <h1>Be Live</h1>
       <hr />
        <Menucomponent/>
        <hr />
        <LoginPage/>
     
    </div>
  )
}

export default HomePage