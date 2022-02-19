import './style.css'
import Header from './Components/Header'
import BarChart from './Components/BarChart'
import ScatterChart from './Components/ScatterChart'
function App() {
  return (
    <div className="App">
      <div className="rectangle"></div>

      <div className="Header__container">
        <Header />
      </div>
      <div className="Charts__container">
        <BarChart />
        <ScatterChart />
      </div>
    </div>
  )
}

export default App
