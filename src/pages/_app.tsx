import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

export default ({ Component, pageProps }) => (
  <>
    <main className="max-w-3xl mx-auto py-5">
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)
