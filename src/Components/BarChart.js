import ReactApexChart from 'react-apexcharts'
import infoIcon from '../Assets/infoIcon.png'
import ResizeCharts from './ResizeCharts'

const BarChart = () => {
  const state = {
    series: [
      {
        name: 'Crescimento em porcentagem',
        data: [3555, 4481, 7458, 7944, 9238, 9598, 11260, 12970, 15647, 44390]
      }
    ],
    options: {
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: [
            '#ff161f',
            '#aa2094',
            '#732895',
            '#0071be',
            '#00adf1',
            '#00ab9d',
            '#00a549',
            '#69c627',
            '#fff000',
            '#ffc200'
          ]
        }
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
          'Axie Infinity',
          'Gala'
        ]
      }
    }
  }

  return (
    <div className="Card">
      <div className="Card__infoChart">
        <h3>Barras: Criptomoedas que mais cresceram em 2021</h3>
        <img src={infoIcon} alt="infoIcon" />
      </div>

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        width={ResizeCharts()}
        height={ResizeCharts()}
      />
    </div>
  )
}

export default BarChart
