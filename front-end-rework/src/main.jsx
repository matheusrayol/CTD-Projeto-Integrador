import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/common.scss'
import axios from 'axios'
import LogRocket from 'logrocket';


LogRocket.init('sthqmi/travel-green');

axios.defaults.baseURL = `http://localhost:8080`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
