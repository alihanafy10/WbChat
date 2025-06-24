import { Outlet, useParams } from "react-router-dom"
import { ConversationSidebar } from "../components/conversations/ConversationSidebar"
import { Page } from "../utils/styles"
import mockConversation from '../__mocks__/conversations'
export const ConversationPage=()=>{
     console.log(useParams());
    return <Page>
        <ConversationSidebar conversations={mockConversation} />

       <Outlet/>
    </Page>
}