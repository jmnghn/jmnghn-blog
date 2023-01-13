import Header from '#components/common/Header'
import Footer from '#components/common/Footer'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <div className="min-h-full transition-colors duration-150">
    {/* <Header /> */}
    <main>{children}</main>
    {/* <Footer /> */}
  </div>
)

export default Layout
