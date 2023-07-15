import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import { MenuProps } from 'antd'
import Link from 'next/link'
import { ROUTES } from '../../constants'
import _ from 'lodash'

type MenuItem = Required<MenuProps>['items'][number]

export const routes = [
  {
    label: 'Sản phẩm',
    key: 'san-pham',
    href: ROUTES.products,
  }
]

interface GetMenuItemProps {
  label: React.ReactNode
  key: React.Key
  href: string,
  children?: GetMenuItemProps[],
}

export const getMenuItem = (props: GetMenuItemProps): MenuItem => {
  const { label, key, href, children, ...rest } = props

  if (children) {
    return {
      ...rest,
      key: key,
      label: <Link href={href}>{label}</Link>,
      children: _.map(children, c => getMenuItem(c))
    }
  }
  return {
    ...rest,
    key: key,
    label: <Link href={href}>{label}</Link>,
  } as MenuItem
}

