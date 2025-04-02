import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Hero } from "./components/Hero"
import { DataVisualization } from "./components/DataVisualization"
import { EducationalSections } from "./components/EducationalSections"
import { RecyclingServices } from "./components/RecyclingServices"
import { PMDGuidelines } from "./components/PMDGuidelines"
import { TranslationProvider } from "./context/TranslationContext"
import { Navbar } from "./components/Navbar"
import { Legislation } from "./components/Legislation"

function App() {
  return (
    <Router>
      <TranslationProvider>
        <div className='min-h-screen'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Hero />
                  <RecyclingServices />
                  <PMDGuidelines />
                  <DataVisualization />
                  <EducationalSections />
                </>
              }
            />
            <Route path='/legislation' element={<Legislation />} />
          </Routes>
        </div>
      </TranslationProvider>
    </Router>
  )
}

export default App
