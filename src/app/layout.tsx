import './globals.css'
import 'antd/dist/reset.css';

export const metadata = {
  title: 'Chỉ số hạnh phúc',
  description: 'Chỉ số hạnh phúc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
