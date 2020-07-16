import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h2>
        <img src={'/assets/logo.svg'} height={'18px'} />
        <Link href="/">
          <a className='mark'>Draper</a>
        </Link>
      </h2>

      <style jsx>{`
      .mark {
        margin-left: 8px;
        text-decoration: none;
        color: black;
      }
      header {
        border-bottom: 1px solid lightgrey;
      }
    `}</style>
    </header>
  )
}
