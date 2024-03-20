import { useState, ChangeEventHandler } from "react";

import { Props } from "./View.types";

export default function useView({ onSend }: Props) {
  const [input, setInput] = useState("");

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    onSend(input);
    setInput("");
  };

  return { input, handleChangeInput, handleSendMessage };
}
