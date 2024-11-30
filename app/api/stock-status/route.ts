import { NextResponse } from 'next/server'

export async function GET() {
 
  const stockStatus = {
    inStock: 70,
    outOfStock: 10,
    lowStock: 20
  }
  return NextResponse.json(stockStatus)
}

