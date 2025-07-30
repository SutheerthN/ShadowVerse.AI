import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const handleChange = (e) => setUserInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = { user: true, text: userInput };
    setMessages((prev) => [...prev, newMessage, { user: false, text: "loading" }]);
    setTyping(true);

    try {
      const res = await axios.post('/api/chat', { message: userInput });
      const botMessage = { user: false, text: res.data.response || "..." };
      setMessages((prev) => [...prev.slice(0, -1), botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev.slice(0, -1), { user: false, text: "Shadow communication failed." }]);
    } finally {
      setTyping(false);
      setUserInput("");
    }
  };

  return (
    <>
      <Head>
        <title>Sung Jin-Woo Bot</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <div className="chat-container">
        <div className="header">
          <div className="contact-info">
            <img className="profile-image" src="https://i.imgur.com/GcKE9Ft.png" alt="Jin-Woo" />
            <h2 className="name">Shadow Monarch</h2>
          </div>
        </div>
        <div className="chat-window">
          {messages.map((msg, i) => (
            <div key={i} className="message-container">
              {msg.user ? (
                <>
                  <div className="user-message message"><div className="message-text">{msg.text}</div></div>
                  <img className="profile-image user-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="User" />
                </>
              ) : (
                <>
                  <img className="profile-image bot-image" src="https://i.imgur.com/GcKE9Ft.png" alt="Jin-Woo" />
                  {msg.text === "loading" ? (
                    <img className="typing-bubble" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODg3ZjFlNzQ1Mzc1ZTFlNTMyZTVjODIzMDYyODUwNDQ0ZDY3ZmU5YyZjdD1z/3tLfKrc4pLWiTkAAph/giphy.gif" />
                  ) : (
                    <div className="bot-message message"><div className="message-text">{msg.text}</div></div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Speak to the Shadow Monarch..." value={userInput} onChange={handleChange} disabled={typing} />
          <button type="submit"><i className="fa fa-paper-plane" /></button>
        </form>
      </div>
    </>
  );
}