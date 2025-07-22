import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, doLoginBack } from "../../core/services/userFetch";
import { doLoginActions } from "./LoginPageAction";
import HomePage from "../HomePage/HomePage";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const [registerInfo, setRegisterInfo] = useState({});

  const user = useSelector((state) => state.loginPageReducer.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLoginInfo = (propName, propValue) => {
    setLoginInfo({
      ...loginInfo,
      [propName]: propValue,
    });
  };

  const handlerRegisterInfo = (propName, propValue) => {
    setRegisterInfo({
      ...registerInfo,
      [propName]: propValue,
    });
  };

  const doLogin = async () => {
    const res = await doLoginBack(loginInfo);
    dispatch(
      doLoginActions({
        user: res.user,
      })
    );
    navigate("/list");
  };

  const doRegister = async () => {
    const res = await createUser(registerInfo);
    dispatch(
      doLoginActions({
        user: res,
      })
    );
    navigate("/list");
  };

  const goToHome = async () => {
    navigate("/");
  };

  return (
    <>
      {!user ? (
        isLogin ? (
          <div>
            <h2>Bienvenido</h2>
            <div>
              <div>
                <span>Username</span>
                <input
                  type="text"
                  onChange={(e) => handlerLoginInfo("username", e.target.value)}
                />
              </div>
              <div>
                <span>Password</span>
                <input
                  type="text"
                  onChange={(e) => handlerLoginInfo("password", e.target.value)}
                />
              </div>
              <hr />
              <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            
            }}>

              <div>
                <button
                  style={{
                    background: "#7abfe2ff",
                    borderRadius: 150,
                    gap: 50,
                  }}
                  onClick={doLogin}
                >
                  <span
                    style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}
                  >
                    Iniciar Sesión
                  </span>
                </button>
              </div>
              <div>
                <button
                  style={{
                    background: "#7abfe2ff",
                    borderRadius: 150,
                    gap: 50,
                  }}
                  onClick={goToHome}
                >
                  <span
                    style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}
                  >
                    Volver
                  </span>
                </button>
              </div>
              </div>
              <hr />
              <div>
                <button
                  style={{
                    background: "#7abfe2ff",
                    borderRadius: 150,
                    gap: 50,
                  }}
                  onClick={() => setIsLogin(false)}
                >
                  <span
                    style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}
                  >
                    Quiero registrarme
                  </span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Esencia Activa</h1>
            <h2>Registrate</h2>
            <div>
              <div>
                <span>Nombre: </span>
                <input
                  type="text"
                  onChange={(e) =>
                    handlerRegisterInfo("nombre", e.target.value)
                  }
                />
              </div>
              <div>
                <span>Username: </span>
                <input
                  type="text"
                  onChange={(e) =>
                    handlerRegisterInfo("username", e.target.value)
                  }
                />
              </div>
              <div>
                <span>Password: </span>
                <input
                  type="text"
                  onChange={(e) =>
                    handlerRegisterInfo("password", e.target.value)
                  }
                />
                <hr />
              </div>
              <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}>
              <div>
                <button style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                gap: 50,
              }}onClick={doRegister}><span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>Registrarme</span></button>
              </div>
              <div>
                <button style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                gap: 50,
              }}onClick={goToHome}><span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>Volver</span></button>
              </div>

              </div>
            </div>
          </div>
        )
      ) : (
        <HomePage />
      )}
    </>
  );
};

export default LoginPage;
