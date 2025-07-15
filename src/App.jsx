import './App.css'
import store from './core/redux/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/HomePage/ContactPage';
import ListPage from './pages/ListPage/ListPage';

function App() {
 
  return (
    <Provider store={store}>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/contact" element={<ContactPage />} />
         </Routes>
       </BrowserRouter>
    </Provider>
  )
}

export default App