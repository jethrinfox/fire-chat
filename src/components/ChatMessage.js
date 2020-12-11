import React from 'react'

const ChatMessage = ({ message, messageClass }) => {

    const { text, photoURL } = message

    return (
        <div className={`message ${messageClass}`} >
            <img src={photoURL} alt={photoURL} />
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
