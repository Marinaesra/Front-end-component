import './App.css'
import store from './core/redux/store/store'
import HomePage from './pages/HomePage/HomePage'
import { Provider } from 'react-redux'

function App() {
 

  return (
    <Provider store={store}>
     <HomePage/>
    </Provider>
  )
}

export default App