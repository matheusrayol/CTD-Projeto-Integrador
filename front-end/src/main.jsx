import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/common.scss'
import axios from 'axios'
import LogRocket from 'logrocket';

LogRocket.init('sthqmi/travel-green');

axios.defaults.baseURL = `http://ec2-3-22-250-39.us-east-2.compute.amazonaws.com:8080`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
