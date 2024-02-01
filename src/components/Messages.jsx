'use client'
import { pusherClient } from '@/app/lib/pusher'
import { FC, useEffect, useState } from 'react'

const Messages = ({ initialMessages, roomId }) => {
  const [incomingMessages, setIncomingMessages] = useState([])

  useEffect(() => {
    pusherClient.subscribe(roomId)

    pusherClient.bind('incoming-message', (text) => {
      setIncomingMessages((prev) => [...prev, text])
    })

    return () => {
      pusherClient.unsubscribe(roomId)
    }
  }, [])

  
  return (
    <div>
        <div>
            hello from Mesages.jsx 
        </div>
      {initialMessages.map((message) => (
        <p key={message.id}>{message.text}</p>
      ))}
      {incomingMessages.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  )
}

export default Messages
