import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import './index.css'
import { AdicionarDespesa } from './pages/AdicionarDespesa'
import { AdicionarEmpenho } from './pages/AdicionarEmpenho'
import { Adicionarpagamento } from './pages/AdicionarPagamento'
import { EditarDespesa } from './pages/EditarDespesa'
import { Editarpagamento } from './pages/EditarPagamento'
import { Empenho } from './pages/Empenho'
import { ErrorPage } from './pages/ErrorPage'
import { Pagamento } from './pages/Pagamento'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/despesa",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/empenho",
    element: <Empenho/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/pagamento",
    element: <Pagamento/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/adicionar-despesa",
    element: <AdicionarDespesa/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/edit/:id",
    element: <EditarDespesa/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/adicionar-empenho",
    element: <AdicionarEmpenho/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/edit-empenho/:id",
    element: <EditarDespesa/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/adicionar-pagamento",
    element: <Adicionarpagamento/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/edit-pagamento/:id",
    element: <Editarpagamento/>,
    errorElement: <ErrorPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
)
