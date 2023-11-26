import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import routes from './routes';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={routes} />
     </QueryClientProvider>
    </AuthProvider>
    <Toaster position="top-right"
  reverseOrder={false}></Toaster>
  </React.StrictMode>,
)
