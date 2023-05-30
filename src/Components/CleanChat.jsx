import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Body from "./Body";
import Heading from "./Heading";
import Footer from "./Footer";
import { messageGenerator } from "../faker";
import { useState } from "react";
import { nanoid } from "nanoid";

const CleanChat = () => {
  const [state, setState] = useState({
    title: "Chat",
    chatsList: messageGenerator(10),
    gravatar: {
      user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
      user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
  });

  function handleSubmit(message) {
    const newMessage = {
      id: nanoid(),
      message,
      time: new Date().toLocaleTimeString(),
      type: "send",
    };
    setState({
      ...state,
      chatsList: [...state.chatsList, newMessage],
    });
  }

  function handelScroll(event) {
    if (!event.target.scrollTop) {
      fetchMessages(10);
    }
  }

  function fetchMessages(count) {
    setState({
      ...state,
      chatsList: [...messageGenerator(count), ...state.chatsList],
    });
  }

  return (
    <div className="container bootstrap snippets" >
      <div className="col-md-7 col-xs-12 col-md-offset-2">
        <div className="panel" id="chat" >
          <Heading title={state.title} />
          <Body
            handelScroll={handelScroll}
            chatsList={state.chatsList}
            gravatar={state.gravatar}
          />
          <Footer handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
export default CleanChat;