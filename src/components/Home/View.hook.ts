"use client";

import { useEffect, useState } from "react";
import type { ChangeEventHandler } from "react";
import io from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_CHAT_WS || "");

const usePage = () => {
  const [chats, setChats] = useState<
    Array<{ message: string; username: string }>
  >([]);
  const [user, setUser] = useState("user-1");
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("chat-message", (data: { message: string; username: string }) => {
      setChats((prev) => [...prev, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
    };
  }, []);

  const handleSendChat = (message: string) => {
    socket.emit("chat-message", message, user);
  };

  const handleChangeUser: ChangeEventHandler<HTMLSelectElement> | undefined = (
    e
  ) => {
    setUser(e.target.value);
  };

  return { chats, user, handleSendChat, handleChangeUser };
};

export default usePage;
