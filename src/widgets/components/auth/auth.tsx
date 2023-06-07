import React, {FC, useState} from 'react';
import styles from './auth.module.scss'
import Input from "../../../shared/UI/input/input";
import Button from "../../../shared/UI/button/button";
import {useInput} from "../../../shared/hooks/useInput";
import {useAppDispatch} from "../../../hooks/useReduser";
import {authSlice} from "../../../store/slice/authSlice";

interface IType {
    children?: any
}

const Auth: FC<IType> = ({children}) => {
    const {auth} = authSlice.actions
    const dispatch = useAppDispatch()
    const id = useInput('')
    const token = useInput('')


    const saveHandler = (e: any) => {
        if (id.value !== '' && token.value !== '') {

            localStorage.setItem('idInstance', id.value)
            localStorage.setItem('apiTokenInstance', token.value)

            id.onChange(e)
            token.onChange(e)

            dispatch(auth(true))
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Input dataInput={id} label={'Введите idInstance'}/>
                <Input dataInput={token} label={'Введите ApiTokenInstance'}/>
                <Button onClick={saveHandler} texBtn={'Войти'}/>
            </div>
        </div>
    );
};

export default Auth;