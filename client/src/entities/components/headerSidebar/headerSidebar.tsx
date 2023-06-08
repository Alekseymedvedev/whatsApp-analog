import React, {FC} from 'react';
import styles from './headerSidebar.module.scss'
import Avatar from "../../../shared/components/avatar/avatar";

interface IType {
    children?: any
}

const HeaderSidebar: FC<IType> = ({children}) => {
    return (
        <div className={styles.headerSidebar}>
            <Avatar size={'small'}/>
        </div>
    );
};

export default HeaderSidebar;