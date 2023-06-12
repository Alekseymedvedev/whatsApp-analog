import React, {FC, useEffect} from 'react';
import styles from './headerChatMessage.module.scss'
import Avatar from "../../../shared/components/avatar/avatar";
import {useGetContactInfoMutation} from "../../../store/api/contactsApi";
import {useToken} from "../../../hooks/useToken";

interface IType {
    children?: any
}

const HeaderChatMessage: FC<IType> = ({children}) => {

    return (
        <div className={styles.header}>
            {children}
            <Avatar/>
        </div>
    );
};

export default HeaderChatMessage;