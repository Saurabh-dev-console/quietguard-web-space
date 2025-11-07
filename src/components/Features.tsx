import { motion } from 'framer-motion';
import { FiShield, FiEye, FiLock, FiZap, FiSettings, FiCode } from 'react-icons/fi';

const features = [
  {
    icon: FiShield,
    title: 'Network Blocking',
    description: 'Blocks ads and trackers at the network level before they even load, saving bandwidth and speeding up page loads.',
  },
  {
    icon: FiEye,
    title: 'Cosmetic Cleaning',
    description: 'Removes overlays, sticky bars, and newsletter popups that disrupt your browsing experience.',
  },
  {
    icon: FiLock,
    title: 'Privacy First',
    description: 'No data collection, no tracking. Everything is processed locally on your device for maximum privacy.',
  },
  {
    icon: FiZap,
    title: 'Lightweight',
    description: 'Minimal resource usage that won\'t slow down your browser. Fast and efficient by design.',
  },
  {
    icon: FiSettings,
    title: 'Customizable',
    description: 'Site allowlist, blocking modes (Standard/Strict), and flexible settings to match your needs.',
  },
  {
    icon: FiCode,
    title: 'SPA Support',
    description: 'Works seamlessly on modern single-page applications like YouTube, Facebook, and Twitter.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Better Web Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced ad-blocking technology that respects your privacy and enhances your browsing speed.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
