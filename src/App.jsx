import './App.css'
import store from './core/redux/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import ListaProductosComponent from './components/ListaProductosComponent/ListProductsComponent'
import ContactPage from './pages/HomePage/ContactPage';

function App() {
 
  return (
    <Provider store={store}>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<LoginPage />} />
          <Route path="/list" element={<ListaProductosComponent />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App