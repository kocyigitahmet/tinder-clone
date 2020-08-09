import React from 'react'
import "./Chats.css"
import Chat from './Chat'


export default function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey whats up!"
                timestamp="40 seconds ago"
                profilePic="https://www.besiktas.com.tr/images/haberici/sarah_magnolia_2.jpg"
            />
            <Chat
                name="Yasemin"
                message="Selam orada mısın?"
                timestamp="21 seconds ago"
                profilePic="https://idora.gazetevatan.com/vatanmediafile/GaleriHaber/2020/04/19/alessandra-ambrosio-yazi-bekliyor-4491506.Jpeg"
            />
            <Chat
                name="Rüya"
                message="Nereden?"
                timestamp="7 minutes ago"
                profilePic="https://live.staticflickr.com/4652/38916315925_397f98fa62_b.jpg"
            />
            <Chat
                name="Shakira"
                message="Will you answer???"
                timestamp="3 days ago"
                profilePic="https://i12.haber7.net//haber/haber7/photos/2018/23/shakiranin_kapalicarsi_cikartmasi_1528175472_6745.jpg"
            />
        </div>
    )
}
