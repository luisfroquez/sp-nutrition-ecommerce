import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { UserNav } from '@components/common'
import titleCase from '@components/utils/titleCase'

interface Link {
  href: string
  label: string
}

const termsLinks: Link[] = [
  { href: '/', label: 'Terms' },
  { href: '/', label: 'Shipping' },
  { href: '/', label: 'Refunds' },
]

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto lg:w-fit px-2">
      <div className="relative flex flex-col justify-between rounded-2xl overflow-hidden backdrop-blur-sm bg-black bg-opacity-80 border-2 border-gray-800">
        {/* TOP */}
        <div className="flex gap-4 w-full items-center flex-1 px-4 py-3">
          <Link href="/" className={s.logo} aria-label="Logo">
            <Logo />
          </Link>
          <nav className="hidden space-x-4 pr-12 lg:block">
            <Link href="/search" className={s.link}>
              All
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href} className={s.link}>
                {titleCase(l.label)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end flex-1 gap-4">
            <UserNav />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bg-gray text-white text-xs px-4 py-3 w-full flex items-center justify-between">
          <span className="text-gray-400">&copy; 2023 SP Nutrition</span>
          <div className="flex gap-2">
            {termsLinks?.map((l) => (
              <Link href={l.href} key={l.href} className={s.link}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )} */}
    </Container>
  </NavbarRoot>
)

export default Navbar
