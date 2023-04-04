import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useState } from "react";
function ChatPage() {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return <div>{chats.map()}</div>;
}

export default ChatPage;
