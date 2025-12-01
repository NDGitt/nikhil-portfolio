import { motion } from 'framer-motion'

const NewsletterSection = () => {
  // Manual post data for full control over styling
  const posts = [
    {
      id: 'ai-partner',
      title: 'When AI Starts Feeling Like a Real Partner',
      description: 'How I use AI for vibe coded apps, comics, and videos, with real examples and a link to $300 in Google’s Veo credits',
      date: 'Nov 29',
      link: 'https://nikhildevgan.substack.com/p/when-ai-starts-feeling-like-a-real',
      // Image now downloaded locally
      image: '/images/newsletter-ai-partner.png' 
    },
    {
      id: 'tech-kid',
      title: 'A Tech Kid Who Never Grew Up',
      description: 'Stories, conversations, and curiosity from a front-row seat to the AI revolution.',
      date: 'Nov 20',
      link: 'https://nikhildevgan.substack.com/p/a-tech-kid-who-never-grew-up',
      // Image now downloaded locally
      image: '/images/newsletter-tech-kid.png'
    }
  ]

  return (
    <section className="py-16 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              My Newsletter - Humans, Machines & Meaning
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a 
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="font-medium text-indigo-600">Newsletter</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                      {post.description}
                    </p>

                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">
                          ND
                        </div>
                        <span className="text-xs font-medium text-gray-700">Nikhil Devgan</span>
                      </div>
                      <span className="text-sm font-medium text-indigo-600 flex items-center group-hover:translate-x-1 transition-transform">
                        Read on Substack <span className="ml-1">→</span>
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection