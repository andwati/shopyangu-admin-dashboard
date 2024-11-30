import { NextRequest, NextResponse } from 'next/server'

const products = [
  { id: 1, name: 'Product 1', price: 19.99, stockLevel: 100, description: 'Description for Product 1', image: '/placeholder.svg', shopId: 1 },
  { id: 2, name: 'Product 2', price: 29.99, stockLevel: 50, description: 'Description for Product 2', image: '/placeholder.svg', shopId: 2 },
]

export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  const { params } = context
  const updatedProduct = await request.json()
  const index = products.findIndex(product => product.id === parseInt(params.id))
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct }
    return NextResponse.json(products[index])
  }
  return NextResponse.json({ error: 'Product not found' }, { status: 404 })
}

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
  const { params } = context
  const index = products.findIndex(product => product.id === parseInt(params.id))
  if (index !== -1) {
    products.splice(index, 1)
    return NextResponse.json({ message: 'Product deleted successfully' })
  }
  return NextResponse.json({ error: 'Product not found' }, { status: 404 })
}
