import _, { values } from 'lodash'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import { Alert } from 'antd'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
        callback: (value) => `${value}%`,
      },
      grid: {
        drawOnChartArea: true,
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
}

const ReportSection = ({
  reportLabels,
  reportValues,

  jobLabels,
  jobValues,

  name,
}) => {
  if (!name) {
    return <div className="min-h-[400px] flex items-center justify-center">Vui lòng nhập tên và lấy kết quả</div>
  }

  if (_.isEmpty(reportValues)) {
    return <Alert message="User này chưa có kết quả, Vui lòng làm khảo sát trước" type="error" />
  }

  return (
    <div className="flex gap-10 flex-wrap">
      <div className="flex-1 max-w-full min-h-[300px] mx-auto relative">
        <Bar
          options={options}
          data={{
            labels: reportLabels,
            datasets: [
              {
                label: 'Loại trí thông minh',
                data: reportValues,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          }}
        />
      </div>
      <div className="flex-1 max-w-full min-h-[300px] mx-auto relative">
        <Bar
          options={options}
          data={{
            labels: jobLabels,
            datasets: [
              {
                label: 'Công Việc',
                data: jobValues,
                backgroundColor: 'rgba(255, 99, 132)',
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

export default ReportSection
