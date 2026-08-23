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
      text: 'Hello! Welcome to St Gabriel\'s International School Assistant. I can answer questions about our school history, motto, location, curriculum, boarding, fees, leadership, and even details about who built this website (TechFlare Solutions). How can I assist you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'Who built this website & what services do they offer?',
    'What is St Gabriel\'s\'s motto, vision & mission?',
    'When was St Gabriel\'s established & school history?',
    'Where is St Gabriel\'s located in Lanet, Nakuru?',
    'What British Curriculum levels are offered?',
    'Does the school offer boarding for boys & girls?',
    'What are the boarding fees & Paybill details?',
    'What are the junior section requirements?',
    'Who is the Principal & School Leadership?',
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

    setTimeout(() => {
      const q = userText.toLowerCase().trim();

      let botResponse = '';
      let actionBtn: { label: string; href: string } | undefined = undefined;

      // 1. TechFlare Solutions / Web Developer query matching
      if (
        q.includes('techflare') ||
        q.includes('developer') ||
        q.includes('built this website') ||
        q.includes('who built') ||
        q.includes('who made') ||
        q.includes('who designed') ||
        q.includes('who created') ||
        q.includes('website creator') ||
        q.includes('web design') ||
        q.includes('software company')
      ) {
        if (q.includes('service') || q.includes('offer') || q.includes('do they do')) {
          botResponse = `TechFlare Solutions ("Igniting Innovations · Delivering Solutions") provides custom software & digital services including: 1) Web & Mobile App Development 2) School Management & Student Portals 3) UI/UX Design & Branding 4) Cloud Infrastructure & Hosting 5) System Integrations & Security. Visit https://techflare-solutions.com for details!`;
          actionBtn = { label: 'Visit TechFlare Solutions', href: 'https://techflare-solutions.com' };
        } else {
          botResponse = `This website was designed and engineered by TECHFLARE SOLUTIONS — "Igniting Innovations · Delivering Solutions". TechFlare Solutions builds high-performance web applications, custom software systems, and mobile applications. Learn more on their official website at https://techflare-solutions.com!`;
          actionBtn = { label: 'Visit TechFlare Solutions', href: 'https://techflare-solutions.com' };
        }
      }
      // 2. Motto / Vision / Mission / Values
      else if (
        q.includes('motto') ||
        q.includes('vision') ||
        q.includes('mission') ||
        q.includes('value') ||
        q.includes('slogan') ||
        q.includes('hope to the world')
      ) {
        botResponse = `St  Gabriel's Motto is "${SCHOOL_INFO.motto}" (also "A Balanced Life & Real-Life Experience").\n\n• Vision: To be a premier international center of academic excellence, moral integrity, and technological innovation.\n• Mission: To provide a transformative international education blending academic rigor, character discipline, STEM innovation, and global diversity.\n• 5 Core Values: Integrity, Excellence, Innovation, Diversity, and Community.`;
        actionBtn = { label: 'Read About Our Vision & Values', href: '/about' };
      }
      // 3. School History / Legacy / Founded / Established
      else if (
        q.includes('history') ||
        q.includes('founded') ||
        q.includes('established') ||
        q.includes('1998') ||
        q.includes('legacy') ||
        q.includes('how old') ||
        q.includes('background')
      ) {
        botResponse = `St Gabriel\'s International School was established in 1998 in Lanet, Nakuru County, Kenya. Over 28 years of academic and spiritual dedication, the school has grown into a premier institution with 1,250+ students from 28+ global nationalities and alumni studying at top universities worldwide.`;
        actionBtn = { label: 'Explore School History', href: '/about' };
      }
      // 4. Location / Address / Directions / Map
      else if (
        q.includes('location') ||
        q.includes('address') ||
        q.includes('where') ||
        q.includes('map') ||
        q.includes('directions') ||
        q.includes('lanet') ||
        q.includes('transformer') ||
        q.includes('nakuru')
      ) {
        botResponse = `St Gabriel\'s International School is located along Transformer Rd, Lanet, Nakuru County, Kenya. Our separate boys' and girls' boarding compounds are situated approximately 4km apart in Lanet to ensure safe, focused living environments.`;
        actionBtn = { label: 'Open Google Maps Directions', href: '/contact' };
      }
      // 5. Leadership / Principal / Staff
      else if (
        q.includes('principal') ||
        q.includes('headmaster') ||
        q.includes('leadership') ||
        q.includes('staff') ||
        q.includes('director') ||
        q.includes('elizabeth') ||
        q.includes('peter mwangi') ||
        q.includes('who leads')
      ) {
        botResponse = `Executive Leadership:\n• Principal & Head of School: Dr. Elizabeth Mwangi (Ph.D. Educational Leadership)\n• Vice Principal & Head of Academics: Mr. Peter Mwangi (M.Sc. Physics)\n• Head of Boarding & Pastoral Care: Mr. Maina (B.A. Counseling Psychology)\n• Head of Co-Curricular: Mr. James Kiptoo (B.Sc. Sports Science)`;
        actionBtn = { label: 'View Full Staff Directory', href: '/staff' };
      }
      // 6. Curriculum / EYFS / Primary / Lower Secondary / Junior / Senior / IGCSE / A-Level
      else if (
        q.includes('curriculum') ||
        q.includes('eyfs') ||
        q.includes('primary') ||
        q.includes('lower secondary') ||
        q.includes('junior') ||
        q.includes('igcse') ||
        q.includes('a-level') ||
        q.includes('alevel') ||
        q.includes('British') ||
        q.includes('grade') ||
        q.includes('level') ||
        q.includes('subject')
      ) {
        botResponse = `We offer the full British International Curriculum path:\n1. Early Years Foundation Stage (EYFS: Playgroup, Nursery, Reception; Ages 2–5)\n2. Primary School (Years 1–6)\n3. Lower / Junior Secondary (Years 7–9)\n4. British IGCSE / Senior Secondary (Years 10–11)\n5. Advanced Level A-Level (Years 12–13)`;
        actionBtn = { label: 'Explore Curriculum Pathways', href: '/academics' };
      }
      // 7. Boarding / Accommodation / Hostels
      else if (
        q.includes('boarding') ||
        q.includes('hostel') ||
        q.includes('dorm') ||
        q.includes('accommodation') ||
        q.includes('separate') ||
        q.includes('4km') ||
        q.includes('boys') ||
        q.includes('girls')
      ) {
        botResponse = `St Gabriel\'s provides full boarding for boys and girls in completely separate compounds ~4km apart in Lanet. Boarding features 24/7 security, resident matrons & house fathers, nutritious dining, supervised study prep hours, medical care, and laundry services.`;
        actionBtn = { label: 'Explore Boarding Life', href: '/boarding' };
      }
      // 8. Fees / Paybill / Equity Bank / Payment
      else if (
        q.includes('fee') ||
        q.includes('cost') ||
        q.includes('paybill') ||
        q.includes('247247') ||
        q.includes('equity') ||
        q.includes('bank') ||
        q.includes('payment')
      ) {
        botResponse = `Boarding fees per term:\n• Grades 1–3: Term 1 (KSh 20,100), Term 2 (KSh 20,500), Term 3 (KSh 20,100)\n• Grades 4–5: Term 1 (KSh 21,400), Term 2 (KSh 21,700), Term 3 (KSh 21,400)\n• Grade 6: Term 1 (KSh 23,500), Term 2 (KSh 23,800), Term 3 (KSh 23,500)\n\nPayment Channels:\n• M-Pesa Paybill: 247247 (Account: 780824#NAME/CLASS)\n• Equity Bank Account: 1460285830194\n• STRICT POLICY: NO CASH PAYMENTS ACCEPTED.`;
        actionBtn = { label: 'View Fees Structure', href: '/fees-and-requirements' };
      }
      // 9. Requirements / Checklist / Uniform / Books
      else if (
        q.includes('requirement') ||
        q.includes('checklist') ||
        q.includes('item') ||
        q.includes('book') ||
        q.includes('bible') ||
        q.includes('atlas') ||
        q.includes('uniform')
      ) {
        botResponse = `Junior section student requirements include: Good News Bible, Golden Bells, Dictionary, Kamusi Sanifu, Moran Atlas, Geometric Set, Plate/Cup/Spoon, Black Leather Shoes, White Sports Shoes, Slippers, Body Oil, Toothpaste/Brush, Soap, Omo, and Toilet Paper (Sanitary Pads for Girls).`;
        actionBtn = { label: 'View Requirements Checklist', href: '/fees-and-requirements' };
      }
      // 10. Contact / Phone / Email / WhatsApp
      else if (
        q.includes('contact') ||
        q.includes('phone') ||
        q.includes('call') ||
        q.includes('email') ||
        q.includes('whatsapp') ||
        q.includes('admissions') ||
        q.includes('enquiry')
      ) {
        botResponse = `Admissions Hotline: ${SCHOOL_INFO.contacts.mainPhone}\nEnquiries Line: ${SCHOOL_INFO.contacts.enquiryPhone}\nAdmissions Email: ${SCHOOL_INFO.contacts.email}\nInfo Email: ${SCHOOL_INFO.contacts.infoEmail}\nLocation: Transformer Rd, Lanet, Nakuru.`;
        actionBtn = {
          label: 'Chat on WhatsApp',
          href: `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`
        };
      }
      // 11. Downloads / Prospectus / Documents / PDF
      else if (
        q.includes('download') ||
        q.includes('prospectus') ||
        q.includes('pdf') ||
        q.includes('document') ||
        q.includes('calendar') ||
        q.includes('handbook')
      ) {
        botResponse = `You can download official PDF documents including the School Prospectus 2026/2027, Fees Structure & Payment Policy, Student Requirements Checklist, Academic Term Calendar, and Boarding Code of Conduct from our Downloads page.`;
        actionBtn = { label: 'Go to Downloads Page', href: '/downloads' };
      }
      // 12. Facilities / Swimming / STEM / Sports / Music / Bus
      else if (
        q.includes('facility') ||
        q.includes('swimming') ||
        q.includes('stem') ||
        q.includes('robotics') ||
        q.includes('sport') ||
        q.includes('bus') ||
        q.includes('music') ||
        q.includes('band')
      ) {
        botResponse = `St Gabriel\'s features modern campus facilities including a Robotics & STEM Innovation Center, computer laboratories, Olympic-size swimming pool, orchestral brass band, soccer & basketball grounds, and a fleet of school transport buses.`;
        actionBtn = { label: 'Explore Student Life & Facilities', href: '/student-life' };
      }
      // 13. Fallback to FAQ database searching
      else {
        const matchedFaq = FAQ_ITEMS.find((faq) => {
          const qMatch = faq.question.toLowerCase().includes(q) || q.includes(faq.question.toLowerCase());
          const tagMatch = faq.tags.some((t) => q.includes(t));
          return qMatch || tagMatch;
        });

        if (matchedFaq) {
          botResponse = matchedFaq.answer;
          if (matchedFaq.category === 'Fees') {
            actionBtn = { label: 'View Fee Structure', href: '/fees-and-requirements' };
          } else if (matchedFaq.category === 'Boarding') {
            actionBtn = { label: 'Explore Boarding Life', href: '/boarding' };
          } else if (matchedFaq.category === 'Curriculum') {
            actionBtn = { label: 'View Curriculum Stages', href: '/academics' };
          } else if (matchedFaq.category === 'Developer & Tech') {
            actionBtn = { label: 'Visit TechFlare Solutions', href: 'https://techflare-solutions.com' };
          } else if (matchedFaq.category === 'About') {
            actionBtn = { label: 'About St Gabriel\'s', href: '/about' };
          }
        } else {
          botResponse = `Thank you for asking about St Gabriel\'s International School in Lanet, Nakuru. We offer a full British Curriculum (EYFS, Primary, Lower Secondary, IGCSE, A-Level) with day and separate boarding facilities. For direct assistance, call our admissions team on +254 724 694 554 or click below to chat on WhatsApp.`;
          actionBtn = {
            label: 'Chat on WhatsApp',
            href: `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`
          };
        }
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
    }, 600);
  };

  return (
    <>
      {/* Floating Widget Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-[#0B1D33] hover:bg-[#162E4D] text-white rounded-full shadow-2xl border-2 border-[#C59B27] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#C59B27]/40"
          aria-label="Open St Gabriel\'s FAQ Assistant"
        >
          <Bot className="w-6 h-6 text-[#E0BA43]" />
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider text-white">
            Ask St Gabriel's Assistant
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
          aria-label="St Gabriel\'s School FAQ Chatbot"
        >
          {/* Header */}
          <div className="bg-[#0B1D33] p-4 border-b border-[#C59B27]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#162E4D] border border-[#C59B27] flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#E0BA43]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-white">
                  St Gabriel's Assistant
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
              placeholder="Ask a question about St Gabriel\'s..."
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
