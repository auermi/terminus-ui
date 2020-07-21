import Layout from '../components/layout'

const Foundations = () => (
  <Layout>
    <h1 className="title">Foundations</h1>
    <div className="grid">
      <a href="/posts/accessibility" className="card">
        <h3>Accessibility &rarr;</h3>
      </a>
      <a href="/posts/color" className="card">
        <h3>Color &rarr;</h3>
      </a>
      <a href="/posts/iconography" className="card">
        <h3>Iconography &rarr;</h3>
      </a>
      <a href="/posts/typography" className="card">
        <h3>Typography &rarr;</h3>
      </a>
    </div>
  </Layout>
)

export default Foundations
