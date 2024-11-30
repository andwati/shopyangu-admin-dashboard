import { NextResponse } from 'next/server'

const shops = [
  { id: 1, name: 'Shop 1', description: 'Description for Shop 1', logo: '/placeholder.svg' },
  { id: 2, name: 'Shop 2', description: 'Description for Shop 2', logo: '/placeholder.svg' },
]

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const updatedShop = await request.json()
  const index = shops.findIndex(shop => shop.id === parseInt(params.id))
  if (index !== -1) {
    shops[index] = { ...shops[index], ...updatedShop }
    return NextResponse.json(shops[index])
  }
  return NextResponse.json({ error: 'Shop not found' }, { status: 404 })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const index = shops.findIndex(shop => shop.id === parseInt(params.id))
  if (index !== -1) {
    shops.splice(index, 1)
    return NextResponse.json({ message: 'Shop deleted successfully' })
  }
  return NextResponse.json({ error: 'Shop not found' }, { status: 404 })
}

