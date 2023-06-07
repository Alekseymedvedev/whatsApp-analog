import React, {FC} from 'react';
import styles from './sidebar.module.scss'

interface IType {
    children?: any
}

const Sidebar: FC<IType> = ({children}) => {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    );
};

export default Sidebar;