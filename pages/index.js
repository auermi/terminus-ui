import Layout from '../components/layout'

const Home = () => (
  <Layout>
    <h1 className="title">Welcome to Draper!</h1>
    <p className="description">Draper is Terminus' design system. Draper is intended to be used across all products within the Terminus ecoysystem.</p>
    <div className="grid">
      <a href="/components" className="card">
        <h3>Components &rarr;</h3>
      </a>
      <a href="/foundations" className="card">
        <h3>Foundations &rarr;</h3>
      </a>
    </div>
  </Layout>
)

export default Home
