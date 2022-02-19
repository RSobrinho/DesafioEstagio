import './style.css'
import Header from './Components/Header'
import BarChart from './Components/BarChart'
function App() {
  return (
    <div className="App">
      <div className="rectangle"></div>

      <div className="container">
        <Header />
        <BarChart />
      </div>
    </div>
  )
}

export default App
