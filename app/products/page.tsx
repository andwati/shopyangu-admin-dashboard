"use client";

import { useState, useEffect } from "react";
import { ProductList } from "../../components/ProductList";
import { ProductForm } from "../../components/ProductForm";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Fetch products and shops from API
    Promise.all([
      fetch("/api/products").then((res) => res.json()),
      fetch("/api/shops").then((res) => res.json()),
    ]).then(([productsData, shopsData]) => {
      setProducts(productsData);
      setShops(shopsData);
    });
  }, []);

  const handleCreateProduct = (newProduct) => {
    // API call to create product
    fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((createdProduct) => {
        setProducts([...products, createdProduct]);
        setIsFormOpen(false);
      });
  };

  const handleUpdateProduct = (updatedProduct) => {
    // API call to update product
    fetch(`/api/products/${updatedProduct.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((updatedProductData) => {
        setProducts(
          products.map((product) =>
            product.id === updatedProductData.id ? updatedProductData : product
          )
        );
        setIsFormOpen(false);
        setEditingProduct(null);
      });
  };

  const handleDeleteProduct = (productId) => {
    // API call to delete product
    fetch(`/api/products/${productId}`, { method: "DELETE" }).then(() => {
      setProducts(products.filter((product) => product.id !== productId));
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Products</h1>
      <button
        onClick={() => setIsFormOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create New Product
      </button>
      {isFormOpen && (
        <ProductForm
          onSubmit={editingProduct ? handleUpdateProduct : handleCreateProduct}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingProduct(null);
          }}
          initialData={editingProduct}
          shops={shops}
        />
      )}
      <ProductList
        products={products}
        onEdit={(product) => {
          setEditingProduct(product);
          setIsFormOpen(true);
        }}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
}
