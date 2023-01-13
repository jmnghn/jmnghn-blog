import { FC } from 'react'

interface Link {
  href: string
  label: string
}

interface HeaderProps {
  links?: Link[]
}

const Header: FC<HeaderProps> = ({ links }) => {
  return (
    <header>
      <div>Header</div>
      <nav></nav>
    </header>
  )
}

export default Header
