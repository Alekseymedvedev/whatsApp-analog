import ChatsList from "../widgets/components/chatsList/chatsList";
import {useEffect, useState} from "react";
import ChatMessages from "../widgets/components/chatMessages/chatMessages";
import Search from "../entities/components/search/search";
import Sidebar from "../widgets/components/sidebar/sidebar";
import HeaderSidebar from "../entities/components/headerSidebar/headerSidebar";


const Home = () => {
    const [idChat, setIdChat] = useState('')
    const [visibleMessage, setVisibleMessage] = useState(false)
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 780px)").matches)

    useEffect(() => {
        window
            .matchMedia("(min-width: 780px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const clickHandler = () => setVisibleMessage(!visibleMessage)

    return (
        <div className={'container'}>
            {
                (!visibleMessage || matches) &&
                <Sidebar onClick={clickHandler}>
                    <HeaderSidebar/>
                    <Search idContacts={setIdChat}/>
                    <ChatsList idChat={setIdChat}/>
                </Sidebar>
            }

            {
                (visibleMessage || matches) &&
                <ChatMessages idChat={idChat} onClick={clickHandler}/>
            }

        </div>
    );
};

export default Home;