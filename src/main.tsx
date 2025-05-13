
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add luxury-specific loading styles
const style = document.createElement('style')
style.textContent = `
  body {
    background: #010B13;
    color: white;
  }
  .luxury-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #010B13 0%, #1A1F2C 100%);
    z-index: 9999;
  }
  .luxury-loader {
    width: 48px;
    height: 48px;
    border: 2px solid #D4AF37;
    border-radius: 50%;
    position: relative;
    opacity: 0.8;
    animation: pulse 1.5s infinite ease-in-out;
  }
  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.8); opacity: 0.5; }
  }
`
document.head.appendChild(style)

// Create loading indicator
const loading = document.createElement('div')
loading.className = 'luxury-loading'
loading.innerHTML = '<div class="luxury-loader"></div>'
document.body.appendChild(loading)

// Render app after short delay for smoother transition
const root = createRoot(document.getElementById("root")!)
setTimeout(() => {
  root.render(<App />)
  
  // Fade out loading screen
  setTimeout(() => {
    loading.style.transition = 'opacity 0.5s ease'
    loading.style.opacity = '0'
    setTimeout(() => {
      loading.remove()
    }, 500)
  }, 300)
}, 800)
