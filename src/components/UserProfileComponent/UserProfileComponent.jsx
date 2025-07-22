import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyUser } from "../../core/services/userFetch";
import { useNavigate } from "react-router";

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

  const save = () => {
    dispatch(modifyUser(userEdit));
    setIsEdit(false);
  };

  const goToList = async () => {
    navigate("/list");
  };

  return (
    <div>
      <h2>Mi perfil</h2>
      {isEdit ? "EDITA TU PERFIL" : "TUS DATOS"}
      <hr />

      <div>
        <span>Nombre: </span>
        {isEdit ? (
          <input
            type="text"
            placeholder={user.name}
            onChange={(e) => userHandler("nombre", e.target.value)}
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
            onChange={(e) => userHandler("usuario", e.target.value)}
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
            onChange={(e) => userHandler("gmail", e.target.value)}
          />
        ) : (
          <span> {user.gmail} </span>
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
      <div>
        <span>Nombre: </span>
        {isEdit ? (
          <input
            type="text"
            placeholder={user.name}
            onChange={(e) => userHandler("nombre", e.target.value)}
          />
        ) : (
          <span> {user.name} </span>
        )}
      </div>
      <div>
        <img src={user.photo} alt="Profile photo" />
      </div>
      {!isEdit && (
        <div style={{
        display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
      }}>
          <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                gap: 50,
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
        <div style={{
        display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
      }}>
          <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                gap: 50,
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
