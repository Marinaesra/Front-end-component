import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenuOptionActions } from './MenuComponentAction'

const Menucomponent = () => {

    const user = useSelector((state) => state.loginPageReducer.user)

    const dispatch = useDispatch()
    /*const navigate = useNavigate()*/

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
            <button>Ver Carrito</button>
        </div>

    </div>
  )
}

export default Menucomponent