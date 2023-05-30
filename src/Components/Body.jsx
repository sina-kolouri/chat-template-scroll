import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

const Body = (props) => {
  const [scrHeight, setScrHeight] = useState(0);
  const chatListsWrapper = useRef();

  useLayoutEffect(() => {
    setScrHeight(chatListsWrapper.current.scrollHeight);
  }, [props.chatsList.length]);

  useEffect(() => {
    if (chatListsWrapper.current.scrollTop === 0) {
      chatListsWrapper.current.scrollTop =
        chatListsWrapper.current.scrollHeight - scrHeight;
    } else {
      chatListsWrapper.current.scrollTop =
        chatListsWrapper.current.scrollHeight;
    }
  }, [props.chatsList.length]);

  // Another way to adjust the scroll : Using useeffect alone
  // useEffect(() => {
  //   setScrHeight(chatListsWrapper.current.scrollHeight);
  //   if (chatListsWrapper.current.scrollTop === 0) {
  //     chatListsWrapper.current.scrollTop =
  //       chatListsWrapper.current.scrollHeight - scrHeight;
  //   } else {
  //     chatListsWrapper.current.scrollTop =
  //       chatListsWrapper.current.scrollHeight;
  //   }
  // }, [props.chatsList.length]);

  const chats =
    props.chatsList &&
    props.chatsList.map((chat) => {
      return (
        <div
          key={chat.id}
          className={`chat ${chat.type === "receive" && "chat-left"}`}
        >
          <div className="chat-avatar">
            <a
              className="avatar avatar-online"
              data-toggle="tooltip"
              href="#"
              data-placement="right"
              title=""
              data-original-title="June Lane"
            >
              <img
                src={
                  chat.type === "receive"
                    ? props.gravatar.user2
                    : props.gravatar.user1
                }
                alt="..."
              />
              <i></i>
            </a>
          </div>
          <div className="chat-body">
            <div className="chat-content">
              <p>{chat.message}</p>
              <time className="chat-time" dateTime={chat.time}>
                {chat.time}
              </time>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div
      ref={chatListsWrapper}
      onScroll={props.handelScroll}
      className="panel-body chats"
    >
      {chats}
    </div>
  );
};
export default Body;
