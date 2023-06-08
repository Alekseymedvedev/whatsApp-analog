import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './chatMessages.module.scss'
import classnames from "classnames";
import {useGetHistoryChatsMutation, useSendMessageMutation} from "../../../store/api/messageApi";
import SendIcon from "../../../shared/assets/images/icon/sendIcon";
import Date from "../../../shared/components/date/date";
import HeaderChatMessage from "../../../entities/components/headerChatMessage/headerChatMessage";
import Arrow from "../../../shared/assets/images/icon/arrow";

interface IType {
    idChat: any
    onClick?:()=>void
}

const ChatMessages: FC<IType> = ({idChat,onClick}) => {
    const [getAllMessage, {data}] = useGetHistoryChatsMutation()
    const [sendMessage] = useSendMessageMutation()

    const textMessageRef = useRef<HTMLDivElement>(null);

    const [message,setMessage]=useState('')

    useEffect(() => {
        if (idChat) getAllMessage({chatId: idChat, "count": 100})
    }, [idChat])

    const sendMessageHandler = (e:any) => {
        e.preventDefault();
        sendMessage({
            chatId: idChat,
            message: message
        }).then(()=>{
            if(textMessageRef.current) { textMessageRef.current.innerText = "" }
        })
    }
    return (

        <div  className={styles.chatMessage}>

            <HeaderChatMessage chatId={idChat}>
                <button onClick={onClick} className={styles.btnClose}>
                    <Arrow/>
                </button>
            </HeaderChatMessage>
            <ul className={styles.list}>
                {
                    data?.map(item =>

                            <li
                                key={item.idMessage}
                                className={classnames(styles.message,item.type==="outgoing"?styles.outgoing: styles.incoming)}
                            >
                                <span>{item.textMessage}</span>
                                <Date milliSeconds={item.timestamp}/>
                            </li>
                    )
                }
            </ul>
            <form onSubmit={sendMessageHandler} className={styles.form}>
                <div
                    className={styles.userText}
                    contentEditable
                    onInput={e => setMessage(e.currentTarget.textContent ? e.currentTarget.textContent:'')}
                    ref={textMessageRef}
                ></div>
                <button type="submit">
                    <SendIcon/>
                </button>
            </form>
        </div>
    );
};

export default ChatMessages;