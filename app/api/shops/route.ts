import { NextResponse } from 'next/server'

const shops = [
  { id: 1, name: 'Shop 1', description: 'Description for Shop 1', logo: '/placeholder.svg' },
  { id: 2, name: 'Shop 2', description: 'Description for Shop 2', logo: '/placeholder.svg' },
]

export async function GET() {
  return NextResponse.json(shops)
}

export async function POST(request: Request) {
  const newShop = await request.json()
  newShop.id = shops.length + 1
  shops.push(newShop)
  return NextResponse.json(newShop, { status: 201 })
}

