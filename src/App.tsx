
import './App.css'
import { ConversationPage } from './pages/ConversationPage'
import { LoginPage } from './pages/LoginPage'
import {  RegisterPage } from './pages/RegisterPage'
import { createBrowserRouter, RouterProvider} from "react-router"
function App() {
  const routes=createBrowserRouter([
    {
      path:'/register',element:<RegisterPage/>
    },
    {
      path:'/login',element:<LoginPage/>
    },
    {
      path:'/conversation',element:<ConversationPage/>
    }
  ])
  
  return (
    <>
  
  <RouterProvider router={routes}/>
  
    </>
  )
}

export default App
