import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

type TopicType = 'Work Experience' | 'Projects' | 'Skills' | 'MBA Journey' | 'Product Strategy'

const EXAMPLE_QUESTIONS: Record<TopicType, string[]> = {
  'Work Experience': [
    'What did Nikhil do at ZS Associates?',
    'What was the impact of his work at the SMB Accelerator?',
    'How did his consulting experience shape his product mindset?'
  ],
  'Projects': [
    'What\'s an AI tool Nikhil built recently?',
    'What was the resume matching tool built for?',
    'What inspired the SMB compliance discovery platform?'
  ],
  'Skills': [
    'What are Nikhil\'s strongest skills as a PM?',
    'How has Nikhil used data to drive decision-making?',
    'What\'s an example of stakeholder alignment in Nikhil\'s work?',
    'How does Nikhil approach ambiguity?'
  ],
  'MBA Journey': [
    'What was Nikhil\'s biggest learning at Haas?',
    'How did Nikhil use AI tools during his MBA?',
    'What\'s a favorite class project Nikhil worked on at Haas?'
  ],
  'Product Strategy': [
    'How did Nikhil design and scale the SMB accelerator?',
    'How does Nikhil approach GTM strategy?',
    'How has Nikhil applied A/B testing or funnel analysis in his work?'
  ]
};

interface ChatAssistantProps {
  isMobile?: boolean;
}

const ChatMessage = ({ message, isUser }: { message: Message; isUser: boolean }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[80%]`}>
        <div
          className={`rounded-2xl px-4 py-2 ${
            isUser
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-800'
          } shadow-sm`}
        >
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
      {isUser && (
        <div className="flex-shrink-0 ml-3">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

const ChatAssistant = ({ isMobile = false }: ChatAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [activeQuestions, setActiveQuestions] = useState<string[]>([])
  const [activeTopic, setActiveTopic] = useState<TopicType | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const questionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeQuestions.length > 0 && 
          questionsRef.current && 
          !questionsRef.current.contains(event.target as Node)) {
        setActiveQuestions([]);
        setActiveTopic(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeQuestions.length]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useLayoutEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleTopicClick = (topic: TopicType) => {
    setActiveTopic(topic);
    setActiveQuestions(EXAMPLE_QUESTIONS[topic]);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
    setActiveQuestions([]);
    setActiveTopic(null);
    handleSubmit(undefined, question);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (activeQuestions.length > 0) {
      setActiveQuestions([]);
      setActiveTopic(null);
    }
  };

  const handleSubmit = async (e?: React.FormEvent, questionOverride?: string) => {
    if (e) e.preventDefault();
    const userMessage = questionOverride || inputValue.trim();
    if (!userMessage || isLoading) return;

    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://nikhil-portfolio-aiassistant-backend-production.up.railway.app/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          question: userMessage, 
          debug: true // This enables logging in the replit console/backend
          }),
      });

      if (!response.ok) throw new Error('Failed to get response');
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative flex flex-col ${isMobile ? 'h-[calc(100vh-7rem)]' : 'h-[500px]'}`}
    >
      {/* Translucent overlay for the entire chat window */}
      <AnimatePresence>
        {activeQuestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/90 backdrop-blur-md z-10"
          />
        )}
      </AnimatePresence>

      {/* Header section */}
      <div className="flex-shrink-0 relative z-20">
        <div className={`flex items-center justify-between ${isMobile ? 'mb-4 px-4' : 'mb-4'}`}>
          <div>
            <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent`}>
              Ask me anything!
            </h2>
            <p className={`text-gray-600 ${isMobile ? 'text-sm mt-1' : 'mt-2'}`}>
              I'm Nikhil's AI assistant, trained on his experience and expertise. Try asking about:
            </p>
          </div>
          {!isMobile && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
            </motion.div>
          )}
        </div>

        <div className={`flex flex-wrap gap-2 ${isMobile ? 'mb-4 px-4' : 'mt-3 mb-2'}`}>
          {Object.keys(EXAMPLE_QUESTIONS).map((topic: string) => (
            <motion.button
              key={topic}
              onClick={() => handleTopicClick(topic as TopicType)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium transition-colors flex items-center space-x-1 ${
                isMobile ? 'text-xs py-1' : ''
              } ${activeTopic === topic ? 'bg-indigo-100 ring-2 ring-indigo-200' : 'hover:bg-indigo-100'}`}
            >
              <span>{topic}</span>
              <svg className={`${isMobile ? 'w-2 h-2' : 'w-3 h-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl ${isMobile ? 'mx-4 p-3 mb-4' : 'p-2 mb-2'}`}>
          <div className="flex items-start space-x-2">
            <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-base">💡</span>
            </div>
            <div>
              <p className={`text-gray-600 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                "Hi! Click any topic above for example questions, or ask me anything about Nikhil's experience and skills!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div 
        className={`flex-1 overflow-y-auto space-y-4 ${isMobile ? 'px-4 mb-4' : 'mb-4'} relative`} 
        ref={chatContainerRef}
        style={{ 
          scrollbarWidth: 'thin',
          scrollbarColor: '#E2E8F0 transparent'
        }}
      >
        <div className="relative z-0">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              isUser={message.role === 'user'}
            />
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start space-x-2"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div className="bg-white shadow-sm border border-indigo-100 rounded-xl p-3 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <motion.div
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <span className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>Thinking...</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Chat input and floating questions */}
      <div className={`flex-shrink-0 sticky bottom-0 bg-white/80 backdrop-blur ${isMobile ? 'pt-3 px-4 pb-4' : 'pt-4'} relative z-20`}>
        {/* Floating questions */}
        <AnimatePresence>
          {activeQuestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full left-0 right-0 p-4"
            >
              <div ref={questionsRef} className="bg-white shadow-lg rounded-xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">Example Questions</span>
                  <button
                    onClick={() => {
                      setActiveQuestions([]);
                      setActiveTopic(null);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeQuestions.map((question, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleQuestionClick(question)}
                      className="inline-block px-3 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-sm text-indigo-700 transition-colors border border-indigo-100 hover:border-indigo-200 text-left w-full md:w-auto"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ask me anything about Nikhil..."
            className={`w-full px-4 pr-[4.5rem] ${
              isMobile ? 'py-2.5 text-sm' : 'py-3'
            } rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading}
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${
              isMobile ? 'px-3 py-1 text-sm' : 'px-4 py-1.5'
            } bg-indigo-600 text-white rounded-lg transition-all ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
            } min-w-[60px]`}
          >
            Ask
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ChatAssistant 