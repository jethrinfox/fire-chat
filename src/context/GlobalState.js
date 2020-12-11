import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';
import { auth, firestore, googleProvider, githubProvider, TimeStamp } from '../config/firebase'
// Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

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
    const [user] = useAuthState(auth);

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt', "asc").limit(25);
    const [messages] = useCollectionData(query);


    useEffect(() => {
        if (user) {
            dispatch({
                type: "USER_CHANGE",
                payload: user
            })
        }
    }, [user])

    useEffect(() => {
        if (messages && user) {
            dispatch({
                type: "MESSAGES_CHANGE",
                payload: messages
            })
        }
    }, [messages, user])


    async function signIn(provider) {
        switch (provider) {
            case 'google':
                console.log("signIn: ", provider);
                await auth.signInWithPopup(googleProvider)
                break;
            case 'github':
                console.log("signIn: ", provider);
                await auth.signInWithPopup(githubProvider)
                break;
            case 'anonymous':
                console.log("signIn: ", provider);
                await auth.signInAnonymously()
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

    async function sendMessage(text) {
        console.log("sendMessage");
        const { uid, photoURL, displayName } = state.user;


        const newMessage = {
            text,
            createdAt: TimeStamp.serverTimestamp(),
            uid,
            userName: displayName ? displayName : "Anonymous",
            photoURL: photoURL === null ? "https://ssl.gstatic.com/docs/common/profile/alligator_lg.png" : photoURL,
        }

        await messagesRef.add(newMessage)
    }


    return (<GlobalContext.Provider value={{
        user: state.user,
        messages: state.messages,
        signIn,
        signOut,
        sendMessage,

    }}>
        {children}
    </GlobalContext.Provider>);
}