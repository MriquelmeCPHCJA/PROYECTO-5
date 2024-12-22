import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router'
import { CssBaseline } from '@mui/material';
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <RouterProvider router={Router} />
  </StrictMode>,
)
