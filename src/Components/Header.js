import hopperFilter from '../Assets/hopperFilter.png'
import React from 'react'

const Header = () => {
  return (
    <header className="Header">
      <div>
        <h1>Dashboard</h1>
        <h3>Desafio Técnico Frontend</h3>
      </div>

      <button
        className="Header__filter"
        onClick={() => {
          alert(
            'Não consegui pensar numa maneira que fazer um filtro não ficaria uma bagunça, então não implementei, mas tentei :| '
          )
        }}
      >
        <div className="filter__desc">
          <img src={hopperFilter} alt="hopperButtonFilter" />
          <h4>Filtrar</h4>
        </div>
      </button>
    </header>
  )
}

export default Header
