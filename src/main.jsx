import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contexttt from './contextStroe/Contexttt.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Contexttt>
      <App />
    </Contexttt>
  </StrictMode>,
  </BrowserRouter>
)
