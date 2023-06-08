import React, {FC} from 'react';
import styles from './button.module.scss'

interface IType {
    onClick?:(e:any)=>void
    texBtn:string
}


const Button: FC<IType> = ({onClick,texBtn}) => {
    return (

        <button onClick={onClick} className={styles.btn}>
            {texBtn}
        </button>
    );
};

export default Button;