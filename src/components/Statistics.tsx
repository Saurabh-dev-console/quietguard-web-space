import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FiShield, FiUsers, FiGlobe, FiZap } from 'react-icons/fi';

const stats = [
  { 
    value: 10234567, 
    label: 'Total Ads Blocked', 
    suffix: '+',
    icon: FiShield,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    value: 10000, 
    label: 'Active Users', 
    suffix: '+',
    icon: FiUsers,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    value: 5000, 
    label: 'Sites Supported', 
    suffix: '+',
    icon: FiGlobe,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    value: 45, 
    label: 'Faster Browsing', 
    suffix: '%',
    icon: FiZap,
    color: 'from-orange-500 to-yellow-500'
  },
];

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = Math.floor(latest).toLocaleString();
        ref.current.textContent = formatted + suffix;
      }
    });
  }, [springValue, suffix]);

  return <div ref={ref} />;
};

const Statistics = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(217 91% 60% / 0.1) 1px, transparent 1px), linear-gradient(to right, hsl(217 91% 60% / 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <span className="text-primary font-semibold text-sm">Real-Time Impact</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Making the Web{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
              Better Every Day
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users experiencing a faster, cleaner internet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              {/* Card */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Counter */}
                <div className="mb-3">
                  <div className="text-4xl lg:text-5xl font-bold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>

                {/* Label */}
                <div className="text-base lg:text-lg text-muted-foreground font-medium">
                  {stat.label}
                </div>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Stats updated in real-time • All data processed locally
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
