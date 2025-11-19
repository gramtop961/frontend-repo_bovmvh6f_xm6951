import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
        className="container mx-auto px-6 max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  )
}
