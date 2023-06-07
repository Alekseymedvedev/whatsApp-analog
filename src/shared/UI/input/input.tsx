import React, {FC} from 'react';
import styles from './input.module.scss'

interface IType {
    label?: string
    dataInput: { value: number | string, onChange: (e: any) => void }
    icon?:any
}

const Input: FC<IType> = ({label, dataInput,icon}) => {

    return (
        <label className={styles.label}>
            {label && <span className={styles.text}>{label}</span>}

            <input {...dataInput} type="text" className={styles.input}/>
            {/*{error && <span className={styles.error}></span>}*/}
            {icon && <span className={styles.icon}>{icon}</span>}
        </label>
    );
};

export default Input;