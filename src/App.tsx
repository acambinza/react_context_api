import './App.css'

import Home from './pages/Home';
import {AppProvider} from './contexts/cart/CartContext'

function App() {
  return (
    <AppProvider>
       <Home />
    </AppProvider>
  )
}

export default App
