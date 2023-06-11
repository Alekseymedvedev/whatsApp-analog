import React, {FC, useEffect, useState} from 'react';
import styles from './date.module.scss'

interface IType {
    milliSeconds: number
}

const Date: FC<IType> = ({milliSeconds}) => {
    // const [hours, setHours] = useState<number>()
    // const [minutes, setMinutes] = useState<number>()
    let days = Math.floor(milliSeconds/(86400 * 1000));

    let hours = Math.floor(milliSeconds/(60 * 60 * 1000 )%24);

    let minutes = Math.round(milliSeconds/1000/60%24);
    // useEffect(() => {
    //     setHours(Math.floor(1686130667 / (1000 * 60 * 60) % 24))
    //     setMinutes(Math.floor((1686168595 / (1000 * 60)) % 60),)
    // }, [ms])
    return (
        <div className={styles.date}>
            {hours}:{minutes}
        </div>
    );
};

export default Date;