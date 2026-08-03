import { Header } from './components/Header'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div id="top" className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
