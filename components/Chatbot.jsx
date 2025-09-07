"use client";
import { useState } from "react";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2"; 

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent-hover transition cursor-pointer"
      >
        <HiChatBubbleLeftEllipsis size={24} />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[350px] h-[450px] md:w-[500px] md:h-[600px] bg-white shadow-2xl rounded-lg overflow-hidden border border-tertiary">
          <div className="flex items-center justify-between bg-accent text-white px-3 py-2">
            <span className="font-semibold">Chat with me</span>
            <button onClick={() => setIsOpen(false)} className="text-2xl">✖</button>
          </div>
          <iframe
            src="https://udaybhasker-career-converstions-uday.hf.space"
            className="w-full h-full"
            allow="clipboard-write; microphone"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;

