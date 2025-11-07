import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Marketer',
    content: 'QuietGuard has completely transformed my browsing experience. No more annoying popups or distracting ads. It\'s fast, reliable, and respects my privacy.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Software Developer',
    content: 'As a developer, I appreciate the technical excellence behind QuietGuard. It uses modern APIs and doesn\'t slow down my browser. The SPA support is excellent.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    content: 'I spend hours browsing for research, and QuietGuard has been a game-changer. The web feels cleaner, faster, and less cluttered. Highly recommend!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Privacy Advocate',
    content: 'Finally, an ad blocker that takes privacy seriously. No data collection, no tracking—just pure, effective ad blocking. This is how extensions should be built.',
    rating: 5,
  },
  {
    name: 'Lisa Park',
    role: 'Freelance Writer',
    content: 'QuietGuard blocks ads without breaking websites. The allowlist feature is perfect for supporting my favorite creators while keeping the rest of the web clean.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Student',
    content: 'Pages load so much faster now! QuietGuard saves me time and data, which is perfect for my limited budget. It\'s simple to use and works flawlessly.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by Users
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Worldwide
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about their experience with QuietGuard.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
