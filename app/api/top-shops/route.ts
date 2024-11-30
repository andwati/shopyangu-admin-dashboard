</ReactProject>

import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, these would be calculated from actual data
  const topShops = [
    { name: 'Shop A', stockLevel: 500 },
    { name: 'Shop B', stockLevel: 450 },
    { name: 'Shop C', stockLevel: 400 },
    { name: 'Shop D', stockLevel: 350 },
    { name: 'Shop E', stockLevel: 300 }
  ]
  return NextResponse.json(topShops)
}

