import { useParams } from "react-router-dom";
import { ConversatiobChannelPageStyle } from "../utils/styles"

export const ConversatiobChannelPage=()=>{
    console.log(useParams());
    
    return <ConversatiobChannelPageStyle>channel page</ConversatiobChannelPageStyle>
}