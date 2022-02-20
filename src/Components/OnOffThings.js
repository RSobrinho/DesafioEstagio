import React from 'react'

const OnOffThings = () => {
  const [isActive, setActive] = React.useState(false)

  return [isActive, setActive]
}

export default OnOffThings

// em resumo, não deu certo essa tentativa de implementação componentizada do state :/
