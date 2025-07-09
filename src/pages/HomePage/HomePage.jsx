import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import Menucomponent from '../../components/MenuComponent/Menucomponent'

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