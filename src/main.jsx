import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './Router/Router.jsx'
import { BrowserRouter } from 'react-router'
import ThemeProvider from './Provider/ThemeProvider.jsx'
import "./index.css"
import AuthProvider from './Provider/AuthProvider.jsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
    </QueryClientProvider> 
  </StrictMode>,
)
