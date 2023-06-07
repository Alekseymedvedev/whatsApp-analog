import React, {FC} from 'react';
import styles from './chat.module.scss'
import Avatar from "../../../shared/components/avatar/avatar";

interface IType {
    avatar?: string
    name?: string
    message?: string
    date?: string
}

const Chat: FC<IType> = ({avatar,name,message,date}) => {
    return (
        <div className={styles.chat}>
                <Avatar avatar={avatar} size={'big'}/>
                <div className={styles.box}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.message}>{message}</div>
                </div>
                <div className={styles.date}>{date}</div>
        </div>
    );
};

export default Chat;