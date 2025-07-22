import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getDetailsProduct } from "../../core/services/productsFetch";
import { useEffect } from "react";
import { saveDetailsProduct } from "./DetailsProductComponentActions";

const DetailsProductComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productId, productDetails } = useSelector(
    (state) => state.detailsProductReducer
  );

  const loadProduct = async () => {
    const aux = await getDetailsProduct(productId);
    dispatch(
      saveDetailsProduct({
        productDetails: aux.product,
      })
    );
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const goToList = async () => {
    navigate("/list");
  };

  return (
    <div>
      <h2>Detalles de los productos</h2>
      {!productDetails ? (
        <div>Loading...</div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                style={{ width: 150, height: 150 }}
                src={productDetails.image_url}
                alt=""
              />
            </div>
            <span> {productDetails.name}</span>
            <span> {productDetails.description}</span>
          </div>
          <div>
            <button
              style={{
                background: "#7abfe2ff",
                borderRadius: 150,
                gap: 50,
              }}
              onClick={goToList}
            >
              <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
                Volver
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsProductComponent;
