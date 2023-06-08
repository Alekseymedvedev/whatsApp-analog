import React, {FC} from 'react';
import styles from './sidebar.module.scss'

interface IType {
    children?: any
    onClick?:()=>void
}

const Sidebar: FC<IType> = ({children,onClick}) => {
    return (
        <div onClick={onClick} className={styles.sidebar}>
            {children}
        </div>
    );
};

export default Sidebar;