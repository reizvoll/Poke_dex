import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const faviconUrl = `${import.meta.env.VITE_URL}/Icon.png`;
const link = document.createElement("link");
link.rel = "icon";
link.href = faviconUrl;
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)