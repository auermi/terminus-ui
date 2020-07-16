import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <div class="container">
        <h2>
          <img src={'/assets/logo.svg'} height={'18px'} />
          <Link href="/">
            <a className='mark'>Draper</a>
          </Link>
        </h2>
      </div>
    </nav>
  )
}
