import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './components/Sidebar.jsx'

// Initialize theme
const theme = localStorage.getItem('theme') || 'light'
document.documentElement.classList.toggle('dark', theme === 'dark')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <App />
  </StrictMode>
)

