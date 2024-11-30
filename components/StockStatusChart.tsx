"use client"

import { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function StockStatusChart() {
  const [stockStatus, setStockStatus] = useState({
    inStock: 0,
    outOfStock: 0,
    lowStock: 0
  })

  useEffect(() => {
    // Fetch stock status from API
    fetch('/api/stock-status')
      .then(res => res.json())
      .then(setStockStatus)
  }, [])

  const data = {
    labels: ['In Stock', 'Out of Stock', 'Low Stock'],
    datasets: [
      {
        data: [stockStatus.inStock, stockStatus.outOfStock, stockStatus.lowStock],
        backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
      },
    ],
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Stock Status Distribution</h2>
      <Pie data={data} />
    </div>
  )
}

