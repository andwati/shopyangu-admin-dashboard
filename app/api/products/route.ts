import { NextResponse } from 'next/server'

let products = [
  { id: 1, name: 'Product 1', price: 19.99, stockLevel: 100, description: 'Description for Product 1', image: '/placeholder.svg', shopId: 1 },
  { id: 2, name: 'Product 2', price: 29.99, stockLevel: 50, description: 'Description for Product 2', image: '/placeholder.svg', shopId: 2 },
]

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const newProduct = await request.json()
  newProduct.id = products.length + 1
  products.push(newProduct)
  return NextResponse.json(newProduct, { status: 201 })
}

