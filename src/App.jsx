import './App.css'
import store from './core/redux/store/store'
import { Provider } from 'react-redux'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
 
  return (
    <Provider store={store}>
     <LoginPage/>
    </Provider>
  )
}

export default App