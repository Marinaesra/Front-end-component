import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import Menucomponent from '../../components/MenuComponent/Menucomponent'
import ListaProductosComponent from '../../components/ListaProductosComponent/ListaProductosComponent'

const HomePage = () => {
  return (
    <div>
        <LoginPage/>
        <hr />
        <Menucomponent/>
     
    </div>
  )
}

export default HomePage