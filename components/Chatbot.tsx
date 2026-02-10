"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Minimize2 } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
};

// Animation Variants
const chatContainerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
    transformOrigin: "bottom right",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const messageVariants = {
  hidden: (sender: string) => ({
    opacity: 0,
    x: sender === "user" ? 20 : -20,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello 👋 Welcome to Halcom. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");

    const userMessage: Message = {
      sender: "user",
      text: userMsg,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    setIsTyping(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      const botMessage: Message = {
        sender: "bot",
        text: data.text,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling chat API:", error);
      const errorMessage: Message = {
        sender: "bot",
        text: "I'm having trouble connecting to my brain right now. Please try again later.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={cn("fixed z-60 transition-all duration-300 flex flex-col items-end", isOpen ? "inset-0 sm:inset-auto sm:bottom-8 sm:right-8" : "bottom-6 right-6 sm:bottom-8 sm:right-8")}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn("bg-white shadow-2xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-300", "w-full h-full sm:h-[600px] sm:w-100 sm:rounded-2xl sm:mb-4 sm:border")}
          >
            {/* Header */}
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-primary p-4 text-white flex justify-between items-center bg-linear-to-r from-primary to-primary/80 shrink-0">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md"
                >
                  <Bot size={24} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-sm leading-none mb-1">Halcom Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] opacity-90 font-medium">Online now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors" aria-label="Close chat">
                <X className="sm:hidden" size={24} />
                <Minimize2 className="hidden sm:block" size={18} />
              </button>
            </motion.div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scroll-smooth min-h-0">
              {messages.map((msg, index) => (
                <motion.div custom={msg.sender} variants={messageVariants} initial="hidden" animate="visible" layout key={index} className={cn("flex flex-col", msg.sender === "user" ? "items-end" : "items-start")}>
                  <div className={cn("flex gap-2 max-w-[85%]", msg.sender === "user" ? "flex-row-reverse" : "flex-row")}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm", msg.sender === "user" ? "bg-primary text-white" : "bg-white text-primary border border-gray-100")}
                    >
                      {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                    </motion.div>
                    <motion.div
                      layoutId={`msg-${index}`}
                      className={cn("px-4 py-2.5 rounded-2xl text-sm shadow-sm whitespace-pre-wrap", msg.sender === "user" ? "bg-primary text-white rounded-tr-none" : "bg-white text-gray-800 border border-gray-100 rounded-tl-none")}
                    >
                      {msg.text.split(/(\[.*?\]\(.*?\)|https?:\/\/[^\s]+)/g).map((part, i) => {
                        const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                        if (linkMatch) {
                          return (
                            <a
                              key={i}
                              href={linkMatch[2]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn("underline font-bold decoration-2 underline-offset-2", msg.sender === "user" ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80")}
                            >
                              {linkMatch[1]}
                            </a>
                          );
                        }
                        if (part.match(/^https?:\/\/[^\s]+$/)) {
                          return (
                            <a
                              key={i}
                              href={part}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn("underline break-all decoration-2 underline-offset-2", msg.sender === "user" ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80")}
                            >
                              {part}
                            </a>
                          );
                        }
                        return part;
                      })}
                    </motion.div>
                  </div>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-gray-400 mt-1 px-10">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </motion.span>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex gap-2 items-center text-gray-400 px-2">
                  <Bot size={14} />
                  <div className="flex gap-1 bg-white px-3 py-2 rounded-2xl border border-gray-100 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="p-4 bg-white border-t border-gray-100 shrink-0 pb-safe">
              <div className="flex gap-2 bg-gray-50 p-2 rounded-xl focus-within:ring-2 focus-within:ring-primary/20 transition-all border border-gray-200">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask something..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2 text-gray-800"
                  onKeyDown={e => e.key === "Enter" && sendMessage()}
                />
                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                  <Button size="icon" onClick={sendMessage} className="h-8 w-8 rounded-lg shrink-0" disabled={!input.trim()}>
                    <Send size={16} />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={
          !isOpen
            ? {
                y: [0, -4, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
            : { y: 0 }
        }
        className={cn("w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-61 relative transition-all duration-300", isOpen ? "bg-white text-gray-600 border border-gray-100 hidden sm:flex" : "bg-primary text-white flex")}
      >
        <AnimatePresence mode="wait">
          <motion.div key={isOpen ? "close" : "open"} initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.2 }}>
            {isOpen ? <X size={28} /> : <Bot size={28} />}
          </motion.div>
        </AnimatePresence>

        {/* Unread dot if closed with pulse effect */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
