import { NextResponse } from 'next/server'

export async function GET() {

  const metrics = {
    totalShops: 10,
    totalProducts: 100,
    totalValue: 5000.00,
    totalStock: 1000
  }
  return NextResponse.json(metrics)
}

