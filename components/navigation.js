import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ link, label }) => {
  const router = useRouter();
  return (
    <li>
      <Link href={link}>
        <a className={
          router.pathname == link ? 'active' : null
        }>{label}
        </a>
      </Link>
    </li>
  );
}

export default function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="flex-left">
          <h2>
            <Link href="/">
              <a className='mark'><img src={'/assets/logo.svg'} height={'18px'} />Draper</a>
            </Link>
          </h2>
          <ul>
            <NavLink link='/' label='Home' />
            <NavLink link='/foundations' label='Foundations' />
            <NavLink link='/components' label='Components' />
          </ul>
        </div>
      </div>
    </nav>
  )
}
