import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { modifyUser } from '../../core/services/userFetch';
import { useNavigate } from 'react-router';

const UserProfileComponent = () => {

  const user = useSelector((state) => state.loginPageReducer.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userEdit, setUserEdit] = useState(undefined)
  const [isEdit, setIsEdit] = useState(undefined)

  const userHandler = (propName, propValue) => {
    setUserEdit({
      ...user,
      [propName]: propValue
    })
  }

  const save = () => {
    modifyUser(user)
    navigate('/list')
  }

   const goToList = async () => {
    navigate("/list");
  };

  return (
    <div>
<h2>Mi perfil</h2>
      {isEdit ? 'EDITA TU PERFIL' : 'TUS DATOS'}
      <hr/>
      <div>
        <strong>Nombre: </strong> {user.name} 
      </div>
      <div>
        <strong>Usuario: </strong> {user.username} 
      </div>
      <div>
        <strong>Correo: </strong> {user.email} 
      </div>
       <div>
        <strong>Contraseña: </strong> {user.password} 
      </div>
      <div>
        <strong>Foto de perfil: </strong> 
        <img src={user.photo} alt='Profile photo'/> 
      </div>
          <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderradius: 150,
                gap: 50,
              }}
              onClick={goToList}
            >
              <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
                Volver
              </span>
            </button>
          </div>
    </div>
  )
}

export default UserProfileComponent