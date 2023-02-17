import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'

import App from './App'
import './index.module.scss'

import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'

const root = ReactDOM.createRoot(document.getElementById('root'))
const routerApp = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        loader: () => redirect('/home')
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '*',
        loader: () => redirect('/error')
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routerApp} />
  </React.StrictMode>
)

reportWebVitals()
