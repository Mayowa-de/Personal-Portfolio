import { motion, type MotionProps } from 'framer-motion'
import type { HTMLAttributes, PropsWithChildren } from 'react'

type RevealProps = PropsWithChildren<MotionProps & HTMLAttributes<HTMLElement>>

export default function Reveal({ children, className, ...props }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
