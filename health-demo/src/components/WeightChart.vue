<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData = {
  labels: ['7/1', '7/5', '7/10', '7/15', '7/20', '7/25', '7/30'],
  datasets: [
    {
      label: 'Weight',
      data: [75.8, 75.5, 75.1, 74.7, 74.2, 73.8, 73.4],
      borderColor: '#3a7d88',
      backgroundColor: 'rgba(58, 125, 136, 0.1)',
      tension: 0.5,  // 增加张力使曲线更平滑
      fill: true,
      pointRadius: 3,  // 减小点的大小
      pointBackgroundColor: '#fff',  // 点的填充色改为白色
      pointBorderColor: '#3a7d88',   // 点的边框色
      pointBorderWidth: 2,
      borderWidth: 2
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#000',
      bodyColor: '#666',
      borderColor: '#ddd',
      borderWidth: 1,
      padding: 10,
      displayColors: false,
      callbacks: {
        label: (context) => `${context.parsed.y} kg`
      }
    }
  },
  scales: {
    y: {
      min: 72,  // 设置最小值
      max: 77,  // 设置最大值
      ticks: {
        stepSize: 1,  // 刻度间隔
        callback: (value) => `${value}kg`
      },
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)'
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
}
</script>