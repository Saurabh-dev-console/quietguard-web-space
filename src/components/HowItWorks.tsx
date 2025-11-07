import { motion } from 'framer-motion';
import { FiDownload, FiGlobe, FiCheckCircle, FiSliders } from 'react-icons/fi';

const steps = [
  {
    icon: FiDownload,
    title: 'Install the Extension',
    description: 'Add QuietGuard to Chrome with a single click from the Chrome Web Store.',
    number: '01',
  },
  {
    icon: FiGlobe,
    title: 'Browse Normally',
    description: 'Visit your favorite websites and browse as you normally would.',
    number: '02',
  },
  {
    icon: FiCheckCircle,
    title: 'Enjoy Ad-Free Experience',
    description: 'QuietGuard automatically blocks ads, trackers, and popups in the background.',
    number: '03',
  },
  {
    icon: FiSliders,
    title: 'Customize Settings',
    description: 'Fine-tune blocking modes and create allowlists for specific sites if needed.',
    number: '04',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with QuietGuard is simple and takes less than a minute.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Number Badge */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-glow">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-1/2 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
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

export default HowItWorks;
