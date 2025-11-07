import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is QuietGuard free to use?',
    answer: 'Yes! QuietGuard is completely free to download and use. There are no hidden costs, subscriptions, or premium features. We believe everyone deserves a clean browsing experience.',
  },
  {
    question: 'How does it compare to other ad blockers?',
    answer: 'QuietGuard uses the latest Manifest V3 standards with dual-layer protection (network-level and cosmetic blocking). It\'s lightweight, privacy-focused, and works seamlessly on modern single-page applications. Unlike some blockers, we don\'t collect any user data.',
  },
  {
    question: 'Will it slow down my browser?',
    answer: 'No! QuietGuard is designed to be extremely lightweight. In fact, by blocking ads and trackers, it actually makes your browser faster by reducing the amount of data that needs to be loaded on each page.',
  },
  {
    question: 'Does it work on YouTube and Facebook?',
    answer: 'Yes! QuietGuard supports modern single-page applications including YouTube, Facebook, Twitter, and many other popular sites. It adapts to dynamic content changes and blocks ads effectively.',
  },
  {
    question: 'How do I report a missed ad or issue?',
    answer: 'If you encounter an ad that wasn\'t blocked or experience any issues, you can report it through the extension popup. We actively maintain our filter lists and address reported issues promptly.',
  },
  {
    question: 'Does QuietGuard collect my browsing data?',
    answer: 'Absolutely not! Privacy is our top priority. QuietGuard processes everything locally on your device and never collects, tracks, or shares your browsing data. You can browse with complete confidence.',
  },
  {
    question: 'Can I whitelist specific websites?',
    answer: 'Yes! QuietGuard includes a customizable allowlist feature. You can easily add sites to your allowlist to support your favorite creators while keeping the rest of the web ad-free.',
  },
  {
    question: 'What\'s the difference between Standard and Strict modes?',
    answer: 'Standard mode blocks most ads and trackers while maintaining compatibility with most websites. Strict mode provides more aggressive blocking, including additional trackers and potential privacy risks, but may occasionally affect website functionality.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We've got answers. Find everything you need to know about QuietGuard.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
