import Footer from '../components/footer'
import Meta from '../components/meta'
import Navigation from './navigation'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
        <Navigation />
        <main class="container">{children}</main>
        <Footer />
      </div>
    </>
  )
}
