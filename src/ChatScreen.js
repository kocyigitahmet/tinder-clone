import React, {useState, useEffect } from 'react'
import "./ChatScreen.css"
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
     const [input, setInput] = useState(''); 
    const [messages, setMessages] = useState([
         {
             name: 'Sarah',
             image: 'https://www.besiktas.com.tr/images/haberici/sarah_magnolia_2.jpg',
             message: 'Hey whats up!'
         },
         {
             name: 'Sarah',
             image: 'https://www.besiktas.com.tr/images/haberici/sarah_magnolia_2.jpg',
             message: 'Hows it going?'
         },
         {
             message: 'hi Sarah, i am so good, you?'
         }
     ])

     const handleSend = e => {
         e.preventDefault();

         setMessages([...messages, {message: input}])
        setInput("");
     }

    return (
        <div className="chatScreen">
            <h2> Chat Screen</h2>
            <p className="chatScreen__timestamp">YOU MATCHED WITH SARAH ON 10-01-2000</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                    />  
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
                <form className="chatScreen__input">
                    <input 
                    value = {input}
                    onChange = {e => setInput(e.target.value)}
                    className= "chatScreen__inputField"
                    placeholder="Please, type a message.."
                    type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen
