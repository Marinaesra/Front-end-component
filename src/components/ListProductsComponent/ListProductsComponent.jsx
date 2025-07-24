import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsActions } from "./ListProductsAction";
import { getProducts } from "../../core/services/productsFetch";
import { useNavigate } from "react-router";
import { detailsProductAction } from "../DetailsProductComponent/DetailsProductComponentActions";
import { addProductToCart } from "../../core/services/userFetch";
import { loadInfoActions } from "../../pages/LoginPage/LoginPageAction";

const ListProductsComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector(
    (state) => state.listProductsReducer.products
  );

  const user = useSelector((state) => state.loginPageReducer.user);

  const loadProducts = async () => {
    const aux = await getProducts();
    dispatch(
      loadProductsActions({
        products: aux.products,
      })
    );
  };

  const gotoDetail = async (productId) => {
    dispatch(
      detailsProductAction({
        productId: productId,
      })
    );
    navigate("/details");
  };

  const goToHome = async () => {
    navigate("/");
  };

  const gotoProfile = async () => {
    navigate("/profile");
  };

  const addToCart = async (productId) => {
    const res = await addProductToCart(user.id, productId);

    dispatch(
      loadInfoActions({
        user: res.user,
      })
    );
  };

  const gotoCart = async () => {
    navigate("/cart")
  }

  useEffect(() => {
    loadProducts();
  }, []);

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
            width: "140px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <h2 style={{ font: '"Cabin", sans-serif', color: "#084040c4" }}>
          PRODUCTOS
        </h2>
      </div>
      <div>
        <button
          style={{
            background: "#7abfe2ff",
            borderRadius: 150,
            gap: 50,
            borderColor: "#084040ff",
          }}
          onClick={gotoProfile}
        >
          <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
            Mi Perfil
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
          onClick={gotoCart}
        >
          <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
            Carrito
          </span>
        </button>
      </div>
      <hr />
      
      {!productList ? (
        <div>Loading...</div>
      ) : (
        productList.map((p, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              justifyContent: "space-between",
              
            }}
          >
            <div>
              <img
                style={{ width: 150, height: 150 }}
                src={p.image_url}
                alt=""
              />
            </div>
            <span> {p.name}</span>
            <span> {p.price}</span>
            <div>
              <button
                style={{
                  background: "#7abfe2ff",
                  borderRadius: 150,
                  gap: 50,
                  borderColor: "#084040ff",
                }}
                onClick={() => {
                  gotoDetail(p.id);
                }}
              >
                <span
                  style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}
                >
                  Detalles
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
                onClick={() => addToCart(p.id)}
              >
                <span
                  style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}
                >
                  Añadir al carrito
                </span>
              </button>
            </div>
          </div>
        ))
      )}
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
          <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
            Volver
          </span>
        </button>
      </div>
    </div>
  );
};

export default ListProductsComponent;
