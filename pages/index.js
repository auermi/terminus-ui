import Layout from '../components/layout'

const Home = () => (
  <Layout>
    <h1 className="title">Welcome to Draper!</h1>
    <p className="description">Quill is Sigstr's design system. Quill is intended to be used across all paid products within the Sigstr platform. This includes:</p>
    <div className="grid">
      <a href="https://nextjs.org/docs" className="card">
        <h3>Components &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className="card">
        <h3>Foundations &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
    </div>
  </Layout>
)

export default Home
