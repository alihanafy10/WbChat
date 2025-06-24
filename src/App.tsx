
import './App.css'
import { ConversationPanal } from './components/conversations/ConversationPanel'
import { ConversatiobChannelPage } from './pages/ConversationChannelPage'
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
      path:'/conversation',element:<ConversationPage/>, 
      children:[
        {path:":id",element:<ConversatiobChannelPage/>},
        {path:"",element:<ConversationPanal/>}
      ]
    }
  ])
  




  return (
    <>
  
  <RouterProvider router={routes}/>
  
    </>
  )
}

export default App
