import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Price from './components/Price'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => {
  return (
    <main>
      <Nav />
      <Header />
      <Content />
      <Price />
      <Footer />
    </main>
  )
}

export default App