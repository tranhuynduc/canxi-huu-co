import { Inter } from 'next/font/google'
import AppHeader from '../../components/Header'
import AnimateContainer from '../../components/AnimateContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <main>
      <AppHeader />
      <AnimateContainer className="my-10">{children}</AnimateContainer>
    </main>
  )
}
