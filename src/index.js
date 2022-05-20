import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot} from 'react-dom/client'
import { Router } from 'react-router-dom';
const rootElement= document.getElementById('root')
const root =createRoot(rootElement)

root.render(


  <App />




);
