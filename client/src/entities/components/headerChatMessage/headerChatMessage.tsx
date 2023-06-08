import React, {FC, useEffect} from 'react';
import styles from './headerChatMessage.module.scss'
import Avatar from "../../../shared/components/avatar/avatar";
import {useGetContactInfoMutation} from "../../../store/api/contactsApi";

interface IType {
    children?: any
    chatId?: string
}

const HeaderChatMessage: FC<IType> = ({children, chatId}) => {
    const [getInfo, {data}] = useGetContactInfoMutation()
    useEffect(() => {
        if(chatId) getInfo({ chatId })
    }, [chatId])

    return (
        <div className={styles.header}>
            {children}
            <Avatar avatar={data?.avatar}/>
            <div className={styles.name}>{data?.name}</div>
        </div>
    );
};

export default HeaderChatMessage;