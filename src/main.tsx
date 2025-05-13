
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add minimal loading styles
const style = document.createElement('style')
style.textContent = `
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    z-index: 9999;
  }
  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
document.head.appendChild(style)

// Create loading indicator
const loading = document.createElement('div')
loading.className = 'loading-screen'
loading.innerHTML = '<div class="loading-spinner"></div>'
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
}, 600)
