import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenuOptionActions } from './MenuComponentAction'

const Menucomponent = () => {

    const user = useSelector((state) => state.loginPageReducer.user)

    const dispatch = useDispatch()

    const handlerMenuOption = (option) => {
        dispatch(
            changeMenuOptionActions (
                {
                    menuOption: option
                }
            )
        )
    }

  return (
<div style={{display: 'flex', gap: 50}}>
        <div>
            <button onClick={() => handlerMenuOption(0)}>Listar productos</button>
        </div>
        <div>
            <button onClick={() => handlerMenuOption(1)}>Ver Carrito [{user.cart?.length}]</button>
        </div>
        <div style={{display:'flex', alignItems: 'center'}}>
            <span style={{fontSize: 18, fontWeight: 'bold'}}>{user.username}</span>
        </div>
    </div>
  )
}

export default Menucomponent