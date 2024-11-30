import Image from 'next/image'

export function ShopList({ shops, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {shops.map(shop => (
        <div key={shop.id} className="bg-white p-4 rounded shadow">
          <Image src={shop.logo} alt={shop.name} width={100} height={100} className="mb-2 rounded" />
          <h2 className="text-xl font-semibold">{shop.name}</h2>
          <p className="text-gray-600">{shop.description}</p>
          <div className="mt-4 space-x-2">
            <button 
              onClick={() => onEdit(shop)}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(shop.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

