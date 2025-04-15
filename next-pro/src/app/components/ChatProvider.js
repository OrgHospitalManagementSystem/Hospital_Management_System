
"use client";
import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Window,
  Thread,
  LoadingIndicator,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import toast, { Toaster } from "react-hot-toast";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export default function ChatProvider({ user, selectedUser }) {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    async function initChat() {
      const res = await fetch(
        `/api/chat/token?userId=${user._id}&with=${selectedUser._id}`
      );
      const data = await res.json();

      const chatClient = StreamChat.getInstance(data.apiKey);

      await chatClient.connectUser(
        {
          id: user._id,
          name: user.name,
          image: user.profilePicture || undefined,
        },
        data.token
      );

      // ✅ إشعار فوري أنيق عند وصول رسالة جديدة
      chatClient.on("message.new", (event) => {
        if (event.user.id !== user._id) {
          toast.success(
            `📩 رسالة جديدة من ${event.user.name}: ${event.message.text}`,
            {
              duration: 5000,
              style: {
                background: "#415A80",
                color: "#fff",
              },
            }
          );
        }
      });

      const chatChannel = chatClient.channel("messaging", {
        members: [user._id, selectedUser._id],
      });

      await chatChannel.watch();
      setClient(chatClient);
      setChannel(chatChannel);
    }

    initChat();

    return () => {
      if (client) client.disconnectUser();
    };
  }, [selectedUser]);

  if (!client || !channel) return <LoadingIndicator />;

  return (
    <>
      {/* ✅ Toast Notification UI */}
      <Toaster position="top-right" reverseOrder={false} />
      <Chat client={client} theme="messaging light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </>
  );
}
