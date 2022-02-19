import hopperFilter from '../Assets/hopperFilter.png'

const Header = () => {
  return (
    <header className="Header">
      <div>
        <h1>Dashboard</h1>
        <h3>Desafio Técnico Frontend</h3>
      </div>

      <button>
        <img src={hopperFilter} alt="hopperButtonFilter" />
        <h4>Filtrar</h4>
      </button>
    </header>
  )
}

export default Header
