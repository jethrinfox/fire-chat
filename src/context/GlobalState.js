import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';
import { auth, githubAuthProvider, googleAuthProvider } from '../config/firebase'
// Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

// Initial state
const initialState = {
    user: undefined,
    messages: [],
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const { user } = useAuthState(auth)

    useEffect(() => {
        dispatch({
            type: "USER_CHANGE",
            payload: user
        })
        console.log("user", user);
    }, [user])

    async function signIn(provider) {
        console.log("signIn: ", provider);
        switch (provider) {
            case 'google':
                auth.signInWithPopup(googleAuthProvider)
                break;
            case 'github':
                auth.signInWithPopup(githubAuthProvider)
                break;
            case 'anonymous':
                auth.signInAnonymously()
                break;
            default:
                break;
        }
    }

    async function signOut() {
        console.log("logout");
        auth.signOut()
        dispatch({
            type: "USER_CHANGE",
            payload: undefined
        })
    }


    return (<GlobalContext.Provider value={{
        user: state.user,
        messages: state.messages,
        signIn,
        signOut,
    }}>
        {children}
    </GlobalContext.Provider>);
}