import { Outlet, useParams } from "react-router-dom"
import { ConversationSidebar } from "../components/conversations/ConversationSidebar"
import { Page } from "../utils/styles"

export const ConversationPage=()=>{
     console.log(useParams());
    return <Page>
        <ConversationSidebar/>
        
       <Outlet/>
    </Page>
}