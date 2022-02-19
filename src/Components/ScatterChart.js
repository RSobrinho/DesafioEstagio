import ReactApexChart from 'react-apexcharts'
import infoIcon from '../Assets/infoIcon.png'
import ResizeCharts from './ResizeCharts'

const ScatterChart = () => {
  const state = {
    series: [
      {
        name: 'Júnior',
        data: [
          [3.8, 2025],
          [3.7, 2249],
          [4.6, 2902],
          [4, 2312],
          [3.9, 2839],
          [3.9, 2737],
          [4.2, 2368],
          [4, 2551],
          [4.3, 3145],
          [3.8, 3778],
          [4.2, 3310],
          [4.1, 3766],
          [4, 3285],
          [3.3, 2242],
          [4.5, 2931],
          [4.3, 2673],
          [4.2, 2924]
        ]
      },
      {
        name: 'Pleno',
        data: [
          [3.8, 2988],
          [4.6, 5788],
          [4.3, 3867],
          [3.9, 3894],
          [3.9, 3900],
          [3.7, 4376],
          [4, 3654],
          [4.1, 7590],
          [4.2, 3500],
          [3.3, 4690],
          [3.8, 4868],
          [4.1, 2796],
          [3.5, 2668],
          [4.2, 5462],
          [4.3, 4036],
          [4, 2389],
          [4.5, 4286]
        ]
      },
      {
        name: 'Sênior',
        data: [
          [4.1, 5957],
          [3.8, 5197],
          [4.3, 4680],
          [3.9, 4845],
          [4.6, 8841],
          [4.2, 5110],
          [4, 5462],
          [4.5, 4833],
          [4.1, 9783],
          [3.8, 9967],
          [4.1, 6412],
          [3.7, 8081],
          [3.2, 3325],
          [3.7, 5847],
          [4.3, 3575],
          [4.2, 5090],
          [4.5, 8276]
        ]
      }
    ],
    options: {
      chart: {
        type: 'scatter'
      },
      xaxis: {
        tickAmount: 15,
        labels: {
          formatter: val => parseFloat(val).toFixed(1)
        }
      },
      yaxis: {
        tickAmount: 10
      }
    }
  }

  return (
    <div className="Card">
      <div className="Card__infoChart">
        <h3>Scatter: Salário x Notas das Empresas(Glassdoor)</h3>
        <img src={infoIcon} alt="infoIcon" />
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="scatter"
        width={ResizeCharts()}
        height={ResizeCharts()}
      />
    </div>
  )
}

export default ScatterChart
