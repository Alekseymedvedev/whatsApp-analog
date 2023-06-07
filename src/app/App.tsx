import React, {useEffect, useState} from 'react';
// import Auth from "../widgets/components/auth/auth";
import '../shared/assets/styles/reset.scss';
import '../shared/assets/styles/globals.scss';
import Home from "../pages/home";
// import {useAppSelector} from "../hooks/useReduser";


function App() {

    // const {isAuth} = useAppSelector(state => state.authReducer)

    // const [id, setId] = useState(localStorage.getItem('idInstance'))
    // const [token, setToken] = useState(localStorage.getItem('apiTokenInstance'))

    // useEffect(() => {
    //     setId(localStorage.getItem('idInstance'))
    //     setToken(localStorage.getItem('apiTokenInstance'))
    // }, [isAuth])

    return (
        <div>
            <Home/>
            {/*{*/}
            {/*    (token && id) ?*/}
            {/*        <Home/>*/}
            {/*        : <Auth/>*/}
            {/*}*/}
        </div>
    );
}

export default App;
