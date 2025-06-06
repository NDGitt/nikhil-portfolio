import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

type TopicType = 'Work Experience' | 'Projects' | 'Skills' | 'MBA Journey' | 'Product Strategy'

const EXAMPLE_QUESTIONS: Record<TopicType, string> = {
  'Work Experience': 'What were your key achievements at ZS Associates?',
  'Projects': 'Tell me about your most impactful product strategy project.',
  'Skills': 'What are your core product management skills?',
  'MBA Journey': 'Why did you choose Berkeley Haas for your MBA?',
  'Product Strategy': 'How do you approach product-market fit?'
};

const ChatAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
      // Prevent page scroll
      window.scrollTo({
        top: window.scrollY,
        behavior: 'instant'
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleTopicClick = (topic: TopicType) => {
    setInputValue(EXAMPLE_QUESTIONS[topic]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userMessage = inputValue.trim()
    setInputValue('')
    
    // Save current scroll position
    const currentScroll = window.scrollY
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('https://dad188d4-b4ce-4780-9cea-36c4bf757d01-00-30i5h0vnnnt5u.picard.replit.dev/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userMessage }),
      })

      if (!response.ok) throw new Error('Failed to get response')
      
      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
      
      // Restore scroll position
      window.scrollTo({
        top: currentScroll,
        behavior: 'instant'
      })
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later." 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Ask me anything!
          </h2>
          <p className="text-gray-600 mt-2">
            I'm Nikhil's AI assistant, trained on his experience and expertise. Try asking about:
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {Object.keys(EXAMPLE_QUESTIONS).map((topic) => (
              <motion.button
                key={topic}
                onClick={() => handleTopicClick(topic as TopicType)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors flex items-center space-x-1"
              >
                <span>{topic}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            ))}
          </div>
        </div>
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
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-lg">💡</span>
          </div>
          <div>
            <p className="text-gray-600">
              "Hi! Click any topic above for example questions, or ask me anything about Nikhil's experience and skills!"
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-4 max-h-[300px] overflow-y-auto">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start space-x-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.role === 'assistant' && (
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-xl p-3 ${
                message.role === 'user'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white shadow-sm border border-indigo-100 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything about Nikhil..."
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button 
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Ask
        </button>
      </form>
    </motion.div>
  )
}

export default ChatAssistant 