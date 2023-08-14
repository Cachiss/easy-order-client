import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/Authprovider.jsx'
import { ShopCarProvider } from './context/ShopCarProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <ShopCarProvider>
    <NextUIProvider>
      <main className='dark'>
        <App />
      </main>
    </NextUIProvider>
    </ShopCarProvider>
    </AuthProvider>

  </React.StrictMode>,
)
