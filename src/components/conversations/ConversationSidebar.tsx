import { ConversationSidebarStyle } from "../../utils/styles"
import { TbEdit } from "react-icons/tb"
import type { ConversationType } from "../../utils/types"
import type { FC } from "react"

type Props = {
  conversations: ConversationType[]
}

export const ConversationSidebar: FC<Props> = ({ conversations }) => {
  return (
    <ConversationSidebarStyle>
      <header>
        <h1>Conversation</h1>
        <TbEdit size={35} />
      </header>
      <div>
        {
            conversations.map((ele)=>(
                <div>
                    {ele.name}
                </div>
            ))
        }
      </div>
    </ConversationSidebarStyle>
  );
}
