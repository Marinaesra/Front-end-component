import './App.css'
import store from './core/redux/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import ListPageProducts from './pages/ListPage/ListPageProducts';
import DetailsProductsPage from './pages/DetailsPage/DetailsProductsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';

function App() {
 
  return (
    <Provider store={store}>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list" element={<ListPageProducts />} />
          <Route path="/details" element={<DetailsProductsPage />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/profile" element={<UserProfilePage />} />
         </Routes>
       </BrowserRouter>
    </Provider>
  )
}

export default App