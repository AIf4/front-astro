import Message from "./Message";
import isMemberOpen from "@/store/navbar";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";

import type { MessageInterface } from "../utils/interfaces";
import { useState } from "react";

export default function Chat() {
  const $isMemberOpen = isMemberOpen((state: any) => state.isOpen);

  const [messages, setMessage] = useState([
    {
      name: "Pedro",
      message: "Hello",
      me: true,
    },
    {
      name: "Juanito",
      message: "Hello",
      me: false,
    },
  ]);

  function handleKeyUp(e: any) {
    if (e.key === "Enter" && e.target.value !== "") {
      const newMessage: MessageInterface = {
        name: "Pedro",
        message: e.target.value,
        me: true,
        date: new Date().toLocaleTimeString(),
      };
      e.target.value = "";
      setMessage([...messages, newMessage]);
    }
  }
  function sendMessage() {
    const input = document.getElementById("messageInput") as HTMLInputElement;
    const { value } = input;
    if (value === "") return;

    const newMessage: MessageInterface = {
      name: "Pedro",
      message: value,
      me: true,
      date: new Date().toLocaleTimeString(),
    };
    input.value = "";
    setMessage([...messages, newMessage]);
  }

  return (
    <div
      className={`px-3 pt-4 transition-all duration-100 ease-in-out ${
        $isMemberOpen ? "w-4/5 " : "w-full "
      }`}
    >
      <div className="bg-slate-400 py-3 px-2 rounded-md overflow-y-auto h-[89vh] content-end sticky bottom-0">
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}

        <Input
          type="text"
          subfixIcon={FaPaperPlane}
          onClickIcon={sendMessage}
          placeholder="Send message ..."
          name=""
          id="messageInput"
          onKeyUpCapture={handleKeyUp}
        />
      </div>
    </div>
  );
}
