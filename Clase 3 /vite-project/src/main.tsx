import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Sidebar from './assets/components/Sidebar.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sidebar />
    <App />
  </StrictMode>,
)



