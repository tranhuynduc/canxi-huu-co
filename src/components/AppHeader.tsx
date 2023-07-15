'use client'
import { Menu, MenuProps } from 'antd'
import { Header } from 'antd/es/layout/layout'
import _ from 'lodash'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
type MenuItem = Required<MenuProps>['items'][number]
const routes = [
  {
    href: '/surveys',
    key: 'survey',
    label: 'Survey',
  },
  {
    href: '/reports',
    label: 'Report',
  },
  {
    href: '/linkedSurveys',
    label: 'Linked Survey',
  },
]

function getItem(label: React.ReactNode, key: React.Key, href: string): MenuItem {
  return {
    key,
    label: <Link href={href}>{label}</Link>,
  } as MenuItem
}

const AppHeader = () => {
  const items: MenuProps['items'] = _.map(routes, (route, index) => {
    return getItem(route.label, index, route.href)
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
        <Menu className="w-full" theme="dark" mode="horizontal" items={items}></Menu>
      </Header>
    </motion.div>
  )
}

export default AppHeader
