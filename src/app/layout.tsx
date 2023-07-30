import BaseProivder from './_BaseProvider'
import './globals.css'
import 'antd/dist/reset.css'

export const metadata = {
  title: 'Chỉ số hạnh phúc',
  description: 'Chỉ số hạnh phúc',
}

export const revalidate = 60
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BaseProivder>{children}</BaseProivder>
      </body>
    </html>
  )
}
