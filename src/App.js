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

// para questões de boas práticas, testei o HTML utilizando o lighthouse do ctrl + shift + i

// De problematico, a unica coisa foi a performace do site, a velocidade de carregamento e interacao, acredito que seja por causa da biblioteca

export default App
