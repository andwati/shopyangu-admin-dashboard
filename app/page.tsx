import { DashboardMetrics } from '../components/DashboardMetrics'
import { StockStatusChart } from '../components/StockStatusChart'
import { TopShopsChart } from '../components/TopShopsChart'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StockStatusChart />
        <TopShopsChart />
      </div>
    </div>
  )
}

