import React, {useEffect, useState} from 'react';
import Auth from "../widgets/components/auth/auth";
import '../shared/assets/styles/reset.scss';
import '../shared/assets/styles/globals.scss';
import Home from "../pages/home";
import {useAppSelector} from "../hooks/useReduser";
import {useToken} from "../hooks/useToken";

function App() {

    const {isAuth} = useAppSelector(state => state.authReducer)

    const idInstance = useToken(isAuth).id
    const apiTokenInstance = useToken(isAuth).token

    const [auth, setAuth] = useState(false)

    useEffect(() => {
        if (idInstance && apiTokenInstance) setAuth(true)
    }, [idInstance, apiTokenInstance, isAuth])

    return (
        <div>
            {
                (auth || (idInstance && apiTokenInstance)) ? <Home/> : <Auth/>
            }
        </div>
    );
}

export default App;
