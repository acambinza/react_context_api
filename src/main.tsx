import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import AuthContext from './contexts/auth'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContext.Provider value={{logado: true}}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>
)
