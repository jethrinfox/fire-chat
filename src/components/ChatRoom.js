import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import ChatMessage from './ChatMessage'

const ChatRoom = () => {

    const dummy = useRef()
    const [formValue, setFormValue] = useState('');
    const { sendMessage, messages, user } = useContext(GlobalContext);


    const handleMessage = async (e) => {
        e.preventDefault();

        await sendMessage(formValue)

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <>
            <main>

                {messages && messages.map((msg, idx) => {
                    return <ChatMessage key={idx} message={msg} userUid={user.uid} />
                })}

                <span ref={dummy}></span>

            </main>

            <form onSubmit={handleMessage}>

                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

                <button type="submit" disabled={!formValue}>🕊️</button>

            </form>


        </>
    )
}

export default ChatRoom
