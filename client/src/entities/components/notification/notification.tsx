import React, {FC} from 'react';
import styles from './notification.module.scss'

interface IType {
    text?: string
    onClick?: ()=>void
}

const Notification: FC<IType> = ({text,onClick}) => {
    return (
        <div className={styles.container} onClick={onClick}>
            У вас новое сообщение!
            {text}
        </div>
    );
};

export default Notification;