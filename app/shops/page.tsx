"use client"

import { useState, useEffect } from 'react'
import { ShopList } from '../../components/ShopList'
import { ShopForm } from '../../components/ShopForm'

export default function Shops() {
  const [shops, setShops] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingShop, setEditingShop] = useState(null)

  useEffect(() => {
    // Fetch shops from API
    fetch('/api/shops')
      .then(res => res.json())
      .then(data => setShops(data))
  }, [])

  const handleCreateShop = (newShop) => {
    // API call to create shop
    fetch('/api/shops', {
      method: 'POST',
      body: JSON.stringify(newShop),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(createdShop => {
        setShops([...shops, createdShop])
        setIsFormOpen(false)
      })
  }

  const handleUpdateShop = (updatedShop) => {
    // API call to update shop
    fetch(`/api/shops/${updatedShop.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedShop),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(updatedShopData => {
        setShops(shops.map(shop => shop.id === updatedShopData.id ? updatedShopData : shop))
        setIsFormOpen(false)
        setEditingShop(null)
      })
  }

  const handleDeleteShop = (shopId) => {
    // API call to delete shop
    fetch(`/api/shops/${shopId}`, { method: 'DELETE' })
      .then(() => {
        setShops(shops.filter(shop => shop.id !== shopId))
      })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Shops</h1>
      <button 
        onClick={() => setIsFormOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create New Shop
      </button>
      {isFormOpen && (
        <ShopForm 
          onSubmit={editingShop ? handleUpdateShop : handleCreateShop}
          onCancel={() => {
            setIsFormOpen(false)
            setEditingShop(null)
          }}
          initialData={editingShop}
        />
      )}
      <ShopList 
        shops={shops} 
        onEdit={(shop) => {
          setEditingShop(shop)
          setIsFormOpen(true)
        }}
        onDelete={handleDeleteShop}
      />
    </div>
  )
}

