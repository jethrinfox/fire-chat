import React from 'react'
import { format } from 'timeago.js';


const ChatMessage = ({ message, userUid }) => {

    const { text, uid, photoURL, createdAt, userName } = message

    const timestamp = createdAt ? format(createdAt.toDate()) : ''
    const messageClass = uid === userUid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`} >
            <img src={photoURL} alt={userName} />
            <div className="message-text">
                <p>{text}</p>
                <span className="timestamp">
                    <span className="username">{userName}</span>
                &bull;
                <span className="posttime">{timestamp}</span>
                </span>
            </div>
        </div>
    )
}

export default ChatMessage
