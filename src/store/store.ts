import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {messageApi} from "./api/messageApi";
import authReducer from './slice/authSlice'
import {chatsApi} from "./api/chatsApi";
import {contactsApi} from "./api/contactsApi";

const rootReducer = combineReducers({
    [chatsApi.reducerPath]: chatsApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    authReducer,
})
export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (gDM) => gDM().concat(
            chatsApi.middleware,
            contactsApi.middleware,
            messageApi.middleware,
        ),
    });

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']

