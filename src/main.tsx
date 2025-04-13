import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

// Import industry-specific fonts
import '@fontsource/space-grotesk/index.css'
import '@fontsource/inter/index.css'
import '@fontsource/bodoni-moda/index.css'
import '@fontsource/cormorant/index.css'
import '@fontsource/tenor-sans/index.css'
import '@fontsource/dm-sans/index.css'
import '@fontsource/archivo-black/index.css'
import '@fontsource/gothic-a1/index.css'
import '@fontsource/abril-fatface/index.css'
import '@fontsource/roboto-mono/index.css'
import '@fontsource/source-sans-pro/index.css'
import '@fontsource/libre-baskerville/index.css'
import '@fontsource/lato/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)