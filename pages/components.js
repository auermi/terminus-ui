import Layout from '../components/layout'

const Components = () => (
  <Layout>
    <h1 className="title">Components</h1>
    <div className="grid">
      <a href="/posts/button" className="card">
        <h3>Button &rarr;</h3>
      </a>
      <a href="/posts/card" className="card">
        <h3>Card &rarr;</h3>
      </a>
      <a href="/posts/checkbox" className="card">
        <h3>Checkbox &rarr;</h3>
      </a>
      <a href="/posts/header" className="card">
        <h3>Header &rarr;</h3>
      </a>
      <a href="/posts/link" className="card">
        <h3>Link &rarr;</h3>
      </a>
      <a href="/posts/radio" className="card">
        <h3>Radio &rarr;</h3>
      </a>
      <a href="/posts/table" className="card">
        <h3>Table &rarr;</h3>
      </a>
      <a href="/posts/text-input" className="card">
        <h3>Text Input &rarr;</h3>
      </a>
      <a href="/posts/tooltip" className="card">
        <h3>Tooltip &rarr;</h3>
      </a>
    </div>
  </Layout>
)

export default Components
