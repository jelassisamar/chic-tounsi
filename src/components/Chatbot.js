import React, { useState } from "react";
import {
  XMarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Réponse du bot", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg focus:outline-none"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
        </button>
      ) : (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="flex justify-between items-center p-2 border-b border-gray-200">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6  bg-blue-500 rounded-2 " />
            <h2 className="text-lg font-semibold   ">Service Client</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6  " />
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 text-sm ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Tapez un message..."
            />
            <button
              onClick={handleSend}
              className="mt-2 w-full py-2 bg-blue-500 text-white rounded-lg focus:outline-none"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
