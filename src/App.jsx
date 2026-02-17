import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./core/redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ListPageProducts from "./pages/ListPage/ListPageProducts";
import DetailsProductsPage from "./pages/DetailsPage/DetailsProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import CartPage from "./pages/CartPage/CartPage";
import MainLayout from "./layouts/MainLayout";
//PersistGate es como el Provider pero permite que redux se alamcene en el navegador del usuario y deben ir juntos y en ese orden

function App() {
  return (
    <Provider store={store}>
 <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/list" element={<ListPageProducts />} />
            <Route path="/details" element={<DetailsProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
 </PersistGate>
    </Provider>
  );
}

export default App;
