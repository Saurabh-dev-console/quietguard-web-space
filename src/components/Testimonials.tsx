import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import testimonialPhoto from '@/assets/testimonial-photo.jpg';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Marketer',
    content: 'QuietGuard has completely transformed my browsing experience. No more annoying popups or distracting ads. It\'s fast, reliable, and respects my privacy.',
    rating: 5,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Verified User'
  },
  {
    name: 'Michael Chen',
    role: 'Software Developer',
    content: 'As a developer, I appreciate the technical excellence behind QuietGuard. It uses modern APIs and doesn\'t slow down my browser. The SPA support is excellent.',
    rating: 5,
    color: 'from-purple-500 to-pink-500',
    badge: 'Tech Expert'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    content: 'I spend hours browsing for research, and QuietGuard has been a game-changer. The web feels cleaner, faster, and less cluttered. Highly recommend!',
    rating: 5,
    color: 'from-green-500 to-emerald-500',
    badge: 'Power User'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden bg-card/20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(217 91% 60%) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
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
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-2xl transition-all duration-500 -z-10`} />
              
              {/* Card */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden flex flex-col">
                {/* Gradient Accent Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="mb-4"
                >
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.color} text-white`}>
                    {testimonial.badge}
                  </span>
                </motion.div>

                {/* Photo with Gradient Border */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-20 rounded-2xl blur-xl`} />
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonial.color} p-1 shadow-lg mx-auto`}>
                    <img 
                      src={testimonialPhoto} 
                      alt={testimonial.name}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                </motion.div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-4">
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
                <div className="relative flex-grow flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="text-center pt-4 border-t border-border">
                    <div className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Corner Decoration */}
                <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute top-0 left-0 w-2 h-8 bg-gradient-to-b ${testimonial.color}`} />
                  <div className={`absolute top-0 left-0 w-8 h-2 bg-gradient-to-r ${testimonial.color}`} />
                </div>
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
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-background overflow-hidden`}
                  >
                    <img src={testimonialPhoto} alt="" className="w-full h-full object-cover" />
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
