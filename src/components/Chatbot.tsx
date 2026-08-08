import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageSquare, X, Send, Sparkles, ChevronRight, RefreshCw, Phone, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, SCHOOL_INFO } from '../data/schoolData';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  actionButton?: {
    label: string;
    href: string;
  };
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Hello! Welcome to St. Gabriel International School Assistant. How can I help you today? Select a question below or type your enquiry.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'What curriculum does St. Gabriel offer?',
    'Is St. Gabriel an international school?',
    'Which grades are available?',
    'Does the school offer boarding?',
    'Are boys and girls accommodated separately?',
    'How far apart are the boarding locations?',
    'What are the boarding fees?',
    'What is the Paybill number & bank account?',
    'What are the junior section requirements?',
    'How do I contact admissions on WhatsApp?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendQuery = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuery('');
    setIsTyping(true);

    // Simulate intelligent search matching against FAQ database
    setTimeout(() => {
      const lowerQuery = userText.toLowerCase();

      let botResponse = '';
      let actionBtn = undefined;

      // Match query logic
      const matchedFaq = FAQ_ITEMS.find((faq) => {
        const qMatch = faq.question.toLowerCase().includes(lowerQuery) || lowerQuery.includes(faq.question.toLowerCase());
        const tagMatch = faq.tags.some((t) => lowerQuery.includes(t));
        return qMatch || tagMatch;
      });

      if (matchedFaq) {
        botResponse = matchedFaq.answer;
        if (matchedFaq.category === 'Fees') {
          actionBtn = { label: 'View Full Fee Table', href: '/fees-and-requirements' };
        } else if (matchedFaq.category === 'Boarding') {
          actionBtn = { label: 'Explore Boarding Life', href: '/boarding' };
        } else if (matchedFaq.category === 'Curriculum') {
          actionBtn = { label: 'View Curriculum Stages', href: '/academics' };
        }
      } else if (lowerQuery.includes('whatsapp') || lowerQuery.includes('phone') || lowerQuery.includes('contact') || lowerQuery.includes('call')) {
        botResponse = `You can call our main admissions line at ${SCHOOL_INFO.contacts.mainPhone} or enquiries at ${SCHOOL_INFO.contacts.enquiryPhone}. You can also chat on WhatsApp directly!`;
        actionBtn = {
          label: 'Chat on WhatsApp',
          href: `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`
        };
      } else if (lowerQuery.includes('fee') || lowerQuery.includes('cost') || lowerQuery.includes('paybill') || lowerQuery.includes('bank')) {
        botResponse = `Boarding fees range from KSh 20,100 to KSh 23,800 per term depending on grade level. Equity Bank Account: 1460285830194, Paybill: 247247 (Account: 780824#NAME/CLASS). Strict policy: NO CASH PAYMENTS.`;
        actionBtn = { label: 'View Fees Page', href: '/fees-and-requirements' };
      } else {
        botResponse = `Thank you for asking about St. Gabriel International School in Lanet, Nakuru. We offer a full British Curriculum (EYFS, Primary, Secondary, IGCSE, A-Level) with day and separate boarding facilities. For detailed personal guidance, feel free to contact our admissions team on +254 724 694 554.`;
        actionBtn = { label: 'Contact Admissions', href: '/contact' };
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionButton: actionBtn
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Widget Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-[#0B1D33] hover:bg-[#162E4D] text-white rounded-full shadow-2xl border-2 border-[#C59B27] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#C59B27]/40"
          aria-label="Open St. Gabriel FAQ Assistant"
        >
          <Bot className="w-6 h-6 text-[#E0BA43]" />
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider text-white">
            Ask St. Gabriel Assistant
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59B27] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E0BA43]"></span>
          </span>
        </button>
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[520px] max-h-[80vh] bg-[#071321] text-white rounded-2xl shadow-2xl border-2 border-[#C59B27]/50 flex flex-col overflow-hidden animate-fade-in"
          role="dialog"
          aria-label="St. Gabriel School FAQ Chatbot"
        >
          {/* Header */}
          <div className="bg-[#0B1D33] p-4 border-b border-[#C59B27]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#162E4D] border border-[#C59B27] flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#E0BA43]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-white">
                  St. Gabriel Assistant
                </h3>
                <p className="text-[10px] text-[#E0BA43] flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Official FAQ & Admissions Bot</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#071321] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#C59B27] text-[#0B1D33] font-semibold rounded-br-none'
                      : 'bg-[#162E4D] text-gray-100 border border-white/10 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  
                  {msg.actionButton && (
                    <a
                      href={msg.actionButton.href}
                      className="inline-flex items-center gap-1 mt-2.5 px-3 py-1.5 rounded-md bg-[#C59B27] text-[#0B1D33] text-[11px] font-bold hover:bg-[#E0BA43] transition-colors"
                    >
                      <span>{msg.actionButton.label}</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <span className="text-[9px] text-gray-500 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-gray-400 text-xs italic p-2 bg-[#162E4D]/50 rounded-lg w-32 border border-white/5">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#C59B27]" />
                <span>Searching FAQ...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions Carousel */}
          <div className="p-2.5 bg-[#0B1D33]/90 border-t border-white/10">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5 px-1">
              Suggested Questions:
            </p>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendQuery(q)}
                  className="flex-shrink-0 px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#C59B27]/30 text-gray-200 text-[10px] font-medium border border-white/10 transition-colors whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Query Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery(query);
            }}
            className="p-3 bg-[#0B1D33] border-t border-[#C59B27]/30 flex items-center gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question about St. Gabriel..."
              className="flex-1 bg-[#071321] text-white text-xs px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-[#C59B27]"
            />
            <button
              type="submit"
              disabled={!query.trim()}
              className="p-2 rounded-lg bg-[#C59B27] hover:bg-[#E0BA43] text-[#0B1D33] disabled:opacity-50 focus:outline-none transition-colors"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
