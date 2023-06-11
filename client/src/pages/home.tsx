import ChatsList from "../widgets/components/chatsList/chatsList";
import {useEffect, useState} from "react";
import ChatMessages from "../widgets/components/chatMessages/chatMessages";
import Search from "../entities/components/search/search";
import Sidebar from "../widgets/components/sidebar/sidebar";
import HeaderSidebar from "../entities/components/headerSidebar/headerSidebar";
import {useGetNotificationQuery} from "../store/api/notificationApi";
import Notification from "../entities/components/notification/notification";


const Home = () => {
    const data = useGetNotificationQuery('', {pollingInterval: 10000})
    console.log(data)
    console.log(2222)

    const [idChat, setIdChat] = useState('')
    const [visibleMessage, setVisibleMessage] = useState(false)
    const [visibleNotification, setVisibleNotification] = useState(false)
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 780px)").matches)

    useEffect(() => {
        window
            .matchMedia("(min-width: 780px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    useEffect(() => {
        if (data?.data?.notification) setVisibleNotification(true)
    }, [data?.data?.notification]);

    const clickHandler = () => setVisibleMessage(!visibleMessage)

    const notification = () => {
        if (data?.data?.notification) setIdChat(data?.data?.notification?.chatId ?? data?.data?.notification?.senderData?.chatId)
        setVisibleNotification(false)
    }

    return (
        <div className={'container'}>
            {
                visibleNotification &&
                <Notification onClick={notification} text={data?.data?.notification?.messageData?.textMessage}/>
            }

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