import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import Direction from './Direction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

        <Direction/>

    </BrowserRouter>

  </StrictMode>,
)
