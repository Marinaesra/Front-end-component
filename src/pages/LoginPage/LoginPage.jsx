import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, doLoginBack } from "../../core/services/userFetch";
import { doLoginActions } from "./LoginPageAction";
import HomePage from "../HomePage/HomePage";
import { useNavigate } from "react-router";

const ERROR_MESSAGE = "Usuario o contraseña no valido";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const [registerInfo, setRegisterInfo] = useState({});
  const [isError, setIsError] = useState(false);

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
    try {
      setIsError(false);

      const res = await doLoginBack(loginInfo);

      if (res.user) {
        dispatch(
          doLoginActions({
            user: res.user,
            token: res.token,
          }),
        );
        navigate("/list");
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const doRegister = async () => {
    const res = await createUser(registerInfo);
    dispatch(
      doLoginActions({
        user: res,
      }),
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
                Bienvenido
              </h2>
            </div>
            <hr />
            {isError && (
              <div style={{ color: "red", marginBottom: "1rem" }}>
                {ERROR_MESSAGE}
              </div>
            )}

            <div>
              <div>
                <span>Email</span>
                <input
                  type="text"
                  onChange={(e) => handlerLoginInfo("email", e.target.value)}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
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
                    onClick={doLogin}
                  >
                    <span
                      style={{
                        font: '"Cabin", sans-serif',
                        color: "#000000ff",
                      }}
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
                      borderColor: "#084040ff",
                    }}
                    onClick={goToHome}
                  >
                    <span
                      style={{
                        font: '"Cabin", sans-serif',
                        color: "#000000ff",
                      }}
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
                    borderColor: "#084040ff",
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
                {" "}
                Registrate
              </h2>
            </div>
            <div>
              <div>
                <span>Nombre: </span>
                <input
                  type="text"
                  onChange={(e) => handlerRegisterInfo("name", e.target.value)}
                />
              </div>
              <div>
                <span>Email: </span>
                <input
                  type="text"
                  onChange={(e) => handlerRegisterInfo("email", e.target.value)}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
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
                    onClick={doRegister}
                  >
                    <span
                      style={{
                        font: '"Cabin", sans-serif',
                        color: "#000000ff",
                      }}
                    >
                      Registrarme
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
                    onClick={goToHome}
                  >
                    <span
                      style={{
                        font: '"Cabin", sans-serif',
                        color: "#000000ff",
                      }}
                    >
                      Volver
                    </span>
                  </button>
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
