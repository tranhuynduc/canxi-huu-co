'use client'
import { Layout } from 'antd'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from "framer-motion"

const Container = ({ children, className }) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className={twMerge('container', className)}>{children}</div>
    </motion.div>
  )
}

export default Container
