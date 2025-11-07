import { motion } from 'framer-motion';
import { FiShield, FiEye, FiLock, FiZap, FiSettings, FiCode } from 'react-icons/fi';

const features = [
  {
    icon: FiShield,
    title: 'Network Blocking',
    description: 'Blocks ads and trackers at the network level before they even load, saving bandwidth and speeding up page loads.',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Core Feature'
  },
  {
    icon: FiEye,
    title: 'Cosmetic Cleaning',
    description: 'Removes overlays, sticky bars, and newsletter popups that disrupt your browsing experience.',
    color: 'from-purple-500 to-pink-500',
    badge: 'Smart Filter'
  },
  {
    icon: FiLock,
    title: 'Privacy First',
    description: 'No data collection, no tracking. Everything is processed locally on your device for maximum privacy.',
    color: 'from-green-500 to-emerald-500',
    badge: 'Zero Tracking'
  },
  {
    icon: FiZap,
    title: 'Lightweight',
    description: 'Minimal resource usage that won\'t slow down your browser. Fast and efficient by design.',
    color: 'from-orange-500 to-yellow-500',
    badge: 'Performance'
  },
  {
    icon: FiSettings,
    title: 'Customizable',
    description: 'Site allowlist, blocking modes (Standard/Strict), and flexible settings to match your needs.',
    color: 'from-rose-500 to-pink-500',
    badge: 'Flexible'
  },
  {
    icon: FiCode,
    title: 'SPA Support',
    description: 'Works seamlessly on modern single-page applications like YouTube, Facebook, and Twitter.',
    color: 'from-indigo-500 to-blue-500',
    badge: 'Modern Web'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden bg-card/20">
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
              <span className="text-primary font-semibold text-sm">Why Choose QuietGuard</span>
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
              Better Web Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced ad-blocking technology that respects your privacy and enhances your browsing speed
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-2xl transition-all duration-500 -z-10`} />
              
              {/* Card */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                {/* Gradient Accent Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="mb-4"
                >
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                    {feature.badge}
                  </span>
                </motion.div>

                {/* Icon Container with Animated Background */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-6"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-2xl blur-xl`} />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Corner Decoration */}
                <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute top-0 left-0 w-2 h-8 bg-gradient-to-b ${feature.color}`} />
                  <div className={`absolute top-0 left-0 w-8 h-2 bg-gradient-to-r ${feature.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {features.slice(0, 3).map((f, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${f.color} border-2 border-background flex items-center justify-center`}
                >
                  <f.icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              All features included • <span className="text-foreground font-semibold">Always free</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
