import React from 'react'

const ChatMessage = ({ message, currentUser }) => {

    const { text, uid, photoURL } = message

    console.log(message);

    const messageClass = uid === currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`} >
            <img src={photoURL} alt={photoURL} />
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
