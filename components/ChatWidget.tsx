import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateAIResponse } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hello! I'm the XYZ Intelligent Assistant. Ask me about our fleet tracking, anti-theft systems, or analytics.", isBot: true }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setIsLoading(true);

    const aiMsg = await generateAIResponse(userMsg);
    
    setMessages(prev => [...prev, { text: aiMsg, isBot: true }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-xyz-blue text-black shadow-lg shadow-xyz-blue/30 hover:scale-110 transition-transform ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-xyz-panel border border-white/20 rounded-lg shadow-2xl flex flex-col overflow-hidden max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-xyz-dark p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-xyz-green" />
                <span className="font-bold text-white">XYZ Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50 h-80">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.isBot 
                      ? 'bg-xyz-gray text-gray-200 rounded-tl-none' 
                      : 'bg-xyz-blue text-black font-medium rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                  <div className="bg-xyz-gray p-3 rounded-lg rounded-tl-none flex items-center">
                    <Loader2 className="w-4 h-4 animate-spin text-xyz-blue" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-xyz-dark border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about GPS features..."
                className="flex-1 bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-xyz-blue"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-xyz-green text-black rounded-md hover:bg-green-400 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;