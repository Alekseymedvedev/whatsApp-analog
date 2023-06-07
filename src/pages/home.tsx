import ChatsList from "../widgets/components/chatsList/chatsList";
import {useState} from "react";
import ChatMessages from "../widgets/components/chatMessages/chatMessages";
import Search from "../entities/components/search/search";
import Sidebar from "../widgets/components/sidebar/sidebar";
import HeaderSidebar from "../entities/components/headerSidebar/headerSidebar";


const Home = () => {
    const [idChat, setIdChat] = useState('')

    return (
        <div className={'container'}>
            <Sidebar>
                <HeaderSidebar/>
                <Search idContacts={setIdChat}/>
                <ChatsList idChat={setIdChat}/>
            </Sidebar>
            <ChatMessages idChat={idChat}/>
        </div>
    );
};

export default Home;