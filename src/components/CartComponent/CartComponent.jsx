import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const CartComponent = () => {
  const user = useSelector((state) => state.loginPageReducer.user);
  const products = useSelector((state) => state.listProductsReducer.products);

  const matchProducts = (productId) => {
    const res = products.find((p) => p.id == productId);
    console.log("res", productId);

    return res;
  };

    const navigate = useNavigate();

  const goTolist = async ()=>{
    navigate("/list")
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
            width: "140px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <h2 style={{ font: '"Cabin", sans-serif', color: "#084040c4" }}>
          MI CARRITO
        </h2>
      </div>
      <hr />
      {!user.cart ? (
        <div style={{ font: '"Cabin", sans-serif', color: "white" }}>
          No hay productos en el carrito
        </div>
      ) : (
        user.cart.map((product, idx) => {
          const p = matchProducts(product.productId);
          if (!p) return;
          return (
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
                {" "}
                <img
                  style={{ width: 150, height: 150 }}
                  src={p.image_url}
                  alt=""
                />
              </div>
              <div>{p.name}</div>
              <div>{p.description}</div>
              <div>{p.price}</div>
            </div>
          );
        })
      )}
      <div>
        <button
          style={{
            background: "#7abfe2ff",
            borderRadius: 150,
            gap: 50,
            borderColor: "#084040ff",
          }}
          onClick={goTolist}
        >
          <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
            {" "}
            Volver{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
