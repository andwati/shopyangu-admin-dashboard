import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, these would be calculated from actual data
  const stockStatus = {
    inStock: 70,
    outOfStock: 10,
    lowStock: 20
  }
  return NextResponse.json(stockStatus)
}

