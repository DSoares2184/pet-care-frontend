import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PetForm from "./components/PetForm.jsx"
import PetDetails from "./components/PetDetails.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/new-pet",
    element: <PetForm />
  },
  {
    path:"/",
    element: <App />
  },
  {
    path:"/petDetails",
    element: <PetDetails />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)