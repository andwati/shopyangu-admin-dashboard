import Image from 'next/image'

export function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Stock Level
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src={product.image} alt={product.name} width={50} height={50} className="rounded" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.stockLevel}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button 
                  onClick={() => onEdit(product)}
                  className="text-indigo-600 hover:text-indigo-900 mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(product.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

