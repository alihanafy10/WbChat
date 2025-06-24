
import { ConversationSidebarStyle } from "../../utils/styles"
import { TbEdit } from "react-icons/tb"

export const ConversationSidebar=()=>{
    return <ConversationSidebarStyle>
        <header>
            <h1>Conversation</h1>
            <TbEdit size={35}/>
        </header>
    </ConversationSidebarStyle>
}