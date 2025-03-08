import React, { useState } from "react";
// import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    // const res = await axios.post("http://localhost:5001/chatbot", { message });
    // setResponse(res.data.response);
  };

  return (
    <div>
      <h3>Spiriter Chatbot</h3>
      <input
        type="text"
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;
