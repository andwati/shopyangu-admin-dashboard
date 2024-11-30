"use client"

import { useState, useEffect } from 'react'

export function DashboardMetrics() {
  const [metrics, setMetrics] = useState({
    totalShops: 0,
    totalProducts: 0,
    totalValue: 0,
    totalStock: 0
  })

  useEffect(() => {
    // Fetch metrics from API
    fetch('/api/metrics')
      .then(res => res.json())
      .then(setMetrics)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Total Shops</h2>
        <p className="text-3xl font-bold">{metrics.totalShops}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Total Products</h2>
        <p className="text-3xl font-bold">{metrics.totalProducts}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Total Value</h2>
        <p className="text-3xl font-bold">${metrics.totalValue.toFixed(2)}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Total Stock</h2>
        <p className="text-3xl font-bold">{metrics.totalStock}</p>
      </div>
    </div>
  )
}

