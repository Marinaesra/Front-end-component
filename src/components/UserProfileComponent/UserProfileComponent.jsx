import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyUser, userDelete } from "../../core/services/userFetch";
import { useNavigate } from "react-router";
import { loadInfoActions } from "../../pages/LoginPage/LoginPageAction";

const UserProfileComponent = () => {
  const user = useSelector((state) => state.loginPageReducer.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userEdit, setUserEdit] = useState(undefined);
  const [isEdit, setIsEdit] = useState(undefined);

  const userHandler = (propName, propValue) => {
    setUserEdit({
      ...user,
      [propName]: propValue,
    });
  };

  const save = async () => {
    const userEdited = await modifyUser(userEdit);
    console.log(userEdited)
    dispatch(
      loadInfoActions({
        user: userEdited,
      })
    );
    setIsEdit(false);
  };

  const goToList = async () => {
    navigate("/list");
  };

const userDeleteEvent = async () => {
  const aux = await userDelete(user.id)
  navigate("/");
  return aux
}

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <img
          src="/EsenciaActivaLogo.png"
          alt="Esencia Activa Logo"
          style={{
            top: "1rem",
            left: "1rem",
            width: "90px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <h2 style={{ font: '"Cabin", sans-serif', color: "#084040c4" }}>
          MI RINCONCITO
        </h2>
      </div>
      {isEdit ? "EDITA TU PERFIL" : "MI INFORMACIÓN"}
      <hr />

      <div>
        <span>Nombre: </span>
        {isEdit ? (
          <input
            type="text"
            placeholder={user.name}
            onChange={(e) => userHandler("name", e.target.value)}
          />
        ) : (
          <span> {user.name} </span>
        )}
      </div>
      <div>
        <span>Usuario: </span>
        {isEdit ? (
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => userHandler("username", e.target.value)}
          />
        ) : (
          <span> {user.username} </span>
        )}
      </div>
      <div>
        <span>Email: </span>
        {isEdit ? (
          <input
            type="text"
            placeholder={user.email}
            onChange={(e) => userHandler("email", e.target.value)}
          />
        ) : (
          <span> {user.email} </span>
        )}
      </div>
      <div>
        {isEdit && (
          <div>
            <label>Contraseña: </label>
            <input
              type="text"
              placeholder={user.password}
              onChange={(e) => userHandler("password", e.target.value)}
            />
          </div>
        )}
      </div>
      <hr />
      <div>
         {!isEdit && (
    <img src={user.photo} alt="photo" />
      )}
       {isEdit && (
  <div>
               <span>Foto: </span>
        {isEdit ? (
               <input 
               type= 'img' src={user.photo} alt="photo"
                placeholder={user.photo}
               onChange={(e) => userHandler("photo", e.target.value)}
/> 
) : (
          <span> {user.photo} </span>
        )}
     </div> 
        
       )}
      </div>
      {!isEdit && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                gap: 50,
                borderColor: "#084040ff",
              }}
              onClick={() => setIsEdit(true)}
            >
              <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
                Modificar
              </span>
            </button>
          </div>
 <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                gap: 50,
                borderColor: "#084040ff",
              }}
              onClick={userDeleteEvent}
            >
              <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
                Eliminar
              </span>
            </button>
          </div>

          <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                borderColor: "#084040ff",
              }}
              onClick={goToList}
            >
              <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
                Volver
              </span>
            </button>
          </div>
        </div>
      )}
      {isEdit && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                gap: 50,
                borderColor: "#084040ff",
              }}
              onClick={save}
            >
              <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
                Guardar
              </span>
            </button>
          </div>
          <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                borderColor: "#084040ff",
              }}
              onClick={() => setIsEdit(false)}
            >
              <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
                Cancelar
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileComponent;
