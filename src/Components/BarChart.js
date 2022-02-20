import ReactApexChart from 'react-apexcharts'
import React from 'react'
import infoIcon from '../Assets/infoIcon.png'
// import ResizeCharts from './ResizeCharts'
// import ShowDesc from './ShowChartDesc'

const BarChart = () => {
  const state = {
    series: [
      {
        name: 'Crescimento em porcentagem',
        data: [3555, 4481, 7458, 7944, 9238, 9598, 11260, 12970, 15647]
      }
    ],
    // utilizar o responsive do proprio apexcharts, coloca options, chart, width e height

    // colocar chart fontFamily

    //
    options: {
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          'Decentraland',
          'Harmony',
          'Kadena',
          'Fantom',
          'Solana',
          'Terra',
          'Polygon',
          'The Sandbox',
          'Axie Infinity'
        ]
      },
      responsive: [
        {
          breakpoint: 1435,
          options: {
            chart: {
              width: '500px',
              height: '400px'
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              width: '460px',
              height: '360px'
            }
          }
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: '380px',
              height: '300px'
            }
          }
        },
        {
          breakpoint: 850,
          options: {
            chart: {
              width: '550px',
              height: '500px'
            }
          }
        },
        {
          breakpoint: 600,
          options: {
            chart: {
              width: '450px',
              height: '350px'
            }
          }
        },
        {
          breakpoint: 500,
          options: {
            chart: {
              width: '380px',
              height: '310px'
            }
          }
        },
        {
          breakpoint: 425,
          options: {
            chart: {
              width: '340px',
              height: '260px'
            }
          }
        },
        {
          breakpoint: 425,
          options: {
            chart: {
              width: '340px',
              height: '260px'
            }
          }
        },
        {
          breakpoint: 369,
          options: {
            chart: {
              width: '310px',
              height: '250px'
            }
          }
        }
      ]
    }
  }

  const [show, changeShow] = React.useState(false)

  return (
    <div className="Card">
      <div className="Card__infoChart">
        <h3>Barras: Criptomoedas que mais cresceram em 2021</h3>
        <img src={infoIcon} alt="infoIcon" onClick={() => changeShow(!show)} />
        <p className={`Card__descChart ${show ? 'on' : ''}`}>
          Criptomedas que mais cresceram em 2021 de acordo com o Banco Digital
          Nubank (Eu excluí a ultima para propósitos de visualização para esse
          desafio :)
        </p>
      </div>

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        width="600"
        height="auto"
      />
    </div>
  )
}

export default BarChart
