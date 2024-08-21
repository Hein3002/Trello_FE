import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import route from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={route}/>
  </StrictMode>,
)
