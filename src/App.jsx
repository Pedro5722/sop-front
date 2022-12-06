import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Header } from './components/Header'
import { Navbar } from './components/Navbar'

import { Despesa } from './pages/Despesa'
import { Empenho } from './pages/Empenho';
import { Pagamento } from './pages/Pagamento';

import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Despesa/>

      
    </div>
  )
}

export default App
