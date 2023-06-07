import React, {FC, useEffect} from 'react';
import styles from './chatMessages.module.scss'
import {useGetHistoryChatsMutation} from "../../../store/api/chatsApi";
import classnames from "classnames";
import Input from "../../../shared/UI/input/input";
import {useInput} from "../../../shared/hooks/useInput";
import Button from "../../../shared/UI/button/button";
import {useSendMessageMutation} from "../../../store/api/messageApi";
import SendIcon from "../../../shared/assets/images/icon/sendIcon";

interface IType {
    idChat: any
}

const ChatMessages: FC<IType> = ({idChat}) => {
    const [getAllMessage, {data}] = useGetHistoryChatsMutation()
    const [sendMessage] = useSendMessageMutation()

    console.log(data)
    const message = useInput('')

    useEffect(() => {
        if (idChat) getAllMessage({chatId: idChat, "count": 10})
    }, [idChat])

    const sendMessageHandler = () => {
        sendMessage({
            chatId: idChat,
            message: message.value
        })
    }
    return (

        <div className={styles.chatMessage}>
            <div className={styles.box}>
                {
                    data?.map(item =>
                        <div key={item.idMessage} className={styles.list}>
                            <div className={styles.date}></div>
                            <div className={classnames(styles.message,item.type==="incoming"&& styles.incoming)}>{item.textMessage}</div>
                            <div className={classnames(styles.message,item.type==="outgoing"&& styles.outgoing)}>{item.textMessage}</div>
                        </div>
                    )
                }
            </div>
            <div className={styles.item}>
                <Input dataInput={message}/>
                <button>
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
};

export default ChatMessages;