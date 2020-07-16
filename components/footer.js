import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <>
      <footer className="bg-accent-1 border-t border-accent-2">
        <Container>
          <div>
            <a href={`https://terminus.com/`}>terminus.com</a>
          </div>
        </Container>
      </footer>
      <style jsx>{`
      footer {
        padding-top: 32px;
      }
  `}</style>
    </>
  )
}
