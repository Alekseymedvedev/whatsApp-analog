import React, {FC} from 'react';
import styles from './chatsList.module.scss'
import Chat from "../../../entities/components/chat/chat";
import {useGetChatsQuery} from "../../../store/api/chatsApi";
import {useToken} from "../../../hooks/useToken";

interface IType {
    idChat: (id: string) => void
}

const ChatsList: FC<IType> = ({idChat}) => {
    const idInstance =useToken().id
    const apiTokenInstance =useToken().token

    const {data: dataChats, isLoading: isLoadingChats, error: errorChats} = useGetChatsQuery({idInstance, apiTokenInstance})

    if (errorChats) {
        return (
            <div> Данные не загружены</div>
        )
    }
    return (
        <div className={styles.chatList}>
            {
                dataChats && dataChats.map((item) =>
                    <div onClick={() => idChat(item?.id)} key={item?.id}>
                        <Chat name={item?.name ?? item.id}/>
                    </div>
                )
            }

        </div>
    );
};

export default ChatsList;