import React from "react";
import { useState } from "react";
const Footer = (props) => {
  const [text, setText] = useState("");

  function handleSubmitFooter() {
    const trimmedText = text.trim();
    if (trimmedText !== "") {
      props.handleSubmit(text);
    }
    setText("");
  }
  
  return (
    <div className="panel-footer">
      <form>
        <div className="input-group">
          <input
            value={text}
            type="text"
            className="form-control"
            placeholder="Say something"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmitFooter}
            >
              Send
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Footer;