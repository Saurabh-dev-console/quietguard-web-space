import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { BsQuote } from 'react-icons/bs';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Marketer',
    content: 'QuietGuard has completely transformed my browsing experience. No more annoying popups or distracting ads. It\'s fast, reliable, and respects my privacy.',
    rating: 5,
    avatar: 'SJ',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Michael Chen',
    role: 'Software Developer',
    content: 'As a developer, I appreciate the technical excellence behind QuietGuard. It uses modern APIs and doesn\'t slow down my browser. The SPA support is excellent.',
    rating: 5,
    avatar: 'MC',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    content: 'I spend hours browsing for research, and QuietGuard has been a game-changer. The web feels cleaner, faster, and less cluttered. Highly recommend!',
    rating: 5,
    avatar: 'ER',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'David Thompson',
    role: 'Privacy Advocate',
    content: 'Finally, an ad blocker that takes privacy seriously. No data collection, no tracking—just pure, effective ad blocking. This is how extensions should be built.',
    rating: 5,
    avatar: 'DT',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    name: 'Lisa Park',
    role: 'Freelance Writer',
    content: 'QuietGuard blocks ads without breaking websites. The allowlist feature is perfect for supporting my favorite creators while keeping the rest of the web clean.',
    rating: 5,
    avatar: 'LP',
    color: 'from-rose-500 to-pink-500'
  },
  {
    name: 'James Wilson',
    role: 'Student',
    content: 'Pages load so much faster now! QuietGuard saves me time and data, which is perfect for my limited budget. It\'s simple to use and works flawlessly.',
    rating: 5,
    avatar: 'JW',
    color: 'from-indigo-500 to-blue-500'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <span className="text-primary font-semibold text-sm">User Testimonials</span>
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by Users{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
              Worldwide
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community is saying about their experience with QuietGuard
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Gradient Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-all duration-300`} />
              
              {/* Card */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 lg:p-8 h-full hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BsQuote className="w-12 h-12 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <FiStar className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {/* Avatar with Gradient */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-card/50 backdrop-blur-sm border border-border rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((t, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} border-2 border-background flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {t.avatar.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">10,000+</span> happy users
              </span>
            </div>
            
            <div className="h-6 w-px bg-border" />
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">4.9/5</span> rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
