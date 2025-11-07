import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FiChrome, FiDownload } from 'react-icons/fi';
import logo from '@/assets/icon128.png';

const Download = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-glow" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-blue-400 p-4 shadow-glow">
              <img src={logo} alt="QuietGuard" className="w-full h-full" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Ready to Experience a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Cleaner Web?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join thousands of users who are already enjoying faster, ad-free browsing with QuietGuard.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8 py-6"
            >
              <FiChrome className="mr-2 w-5 h-5" />
              Add to Chrome - It's Free
            </Button>
          </motion.div>

          {/* Info Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-sm text-muted-foreground">
              <FiDownload className="inline mr-1" />
              Free • No Sign-up Required • Privacy-First
            </p>
            <p className="text-xs text-muted-foreground">
              Compatible with Chrome and Chromium-based browsers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
