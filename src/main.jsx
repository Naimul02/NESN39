import { ToastContainer } from 'react-toastify';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
    <ToastContainer position='top-center'autoClose={2000} />
    </QueryClientProvider>
  </StrictMode>,
)
