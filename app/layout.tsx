import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopYangu Admin",
  description: "Admin panel for ShopYangu e-commerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <aside className="w-64 bg-white shadow-md">
            {/* Sidebar content */}
            <nav className="mt-5">
              <Link href="/" className="block py-2 px-4  hover:bg-gray-200">
                Dashboard
              </Link>
              <Link
                href="/shops"
                className="block py-2 px-4  hover:bg-gray-200"
              >
                Shops
              </Link>
              <Link
                href="/products"
                className="block py-2 px-4  hover:bg-gray-200"
              >
                Products
              </Link>
            </nav>
          </aside>
          <main className="flex-1 p-10 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
