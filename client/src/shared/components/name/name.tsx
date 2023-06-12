import React, {FC} from 'react';
import styles from './name.module.scss'

interface IType {
    name: string
}

const Name: FC<IType> = ({name}) => {

    return (
        <div className={styles.name}>{name.split('@').shift()}</div>
    );
};

export default Name;