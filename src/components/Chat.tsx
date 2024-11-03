import { useState } from "preact/compat";
import { useStore } from "@nanostores/preact";
import Message from "./Message";
import { isMemberOpen } from "../store/navbar";
import type { MessageInterface } from "../utils/interfaces";

export default function Chat() {
  const $isMemberOpen = useStore(isMemberOpen);
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
      };
      setMessage([...messages, newMessage]);
      e.target.value = "";
    }
  }

  return (
    <div class={`px-3 pt-4 transition-all duration-100 ease-in-out ${$isMemberOpen ? "w-4/5 " : "w-full "}`}>
      <div class="bg-slate-400 py-3 px-2 rounded-md overflow-y-auto h-[89vh] content-end sticky bottom-0">
        {messages.map((message) => (
          <Message {...message} />
        ))}

        <input
          type="text"
          placeholder="Message ..."
          class="w-full rounded-md mt-2 h-10 text-slate-200 placeholder:text-slate-200 bg-slate-500 py-1 px-2 shadow-md sticky bottom-0"
          name=""
          onKeyUpCapture={handleKeyUp}
        />
      </div>
    </div>
  );
}
