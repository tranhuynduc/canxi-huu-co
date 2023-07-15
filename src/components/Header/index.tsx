'use client'
import { Menu, MenuProps } from 'antd'
import { Header } from 'antd/es/layout/layout'
import _ from 'lodash'
import React from 'react'
import { motion } from 'framer-motion'
import { getMenuItem, routes } from './menus'

const AppHeader = () => {
  const menuItems: MenuProps['items'] = _.map(routes, (route, index) => {
    return getMenuItem(route)
  })
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <Header style={{ display: 'flex', alignItems: 'center' }} className="w-full">
        <Menu className="w-full" theme="dark" mode="horizontal" items={menuItems}></Menu>
      </Header>
    </motion.div>
  )
}

export default AppHeader
