"use client"

import { useState, useEffect } from 'react'
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
  ChartData
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface TopShop {
  name: string
  stockLevel: number
}

export function TopShopsChart() {
  const [topShops, setTopShops] = useState<TopShop[]>([])

  useEffect(() => {
    fetch('/api/top-shops')
      .then(res => res.json())
      .then(setTopShops)
  }, [])

  const data: ChartData<'bar'> = {
    labels: topShops.map(shop => shop.name),
    datasets: [
      {
        label: 'Stock Level',
        data: topShops.map(shop => shop.stockLevel),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Top 5 Shops by Stock Level',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Shops',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Stock Level',
        },
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <Bar options={options} data={data} />
    </div>
  )
}

