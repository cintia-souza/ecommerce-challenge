'use client';

import React from 'react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/api';
import { Product } from '@/types/product';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const displayPrice = product.promotionalPrice || product.price;
    const originalPrice = product.price;
    const isPromotional = !!product.promotionalPrice;
    
    const badgeColor = product.discount === 'New' ? 'bg-teal-400' : 'bg-red-500';

    return (
        <div className="relative bg-gray-100 group">
            <Link href={`/products/${product.id}`}>
                <div className="h-72 w-full overflow-hidden">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition duration-500 group-hover:opacity-75"
                    />
                </div>
            </Link>

            {product.discount && (
                <span className={`absolute top-4 right-4 ${badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {product.discount.startsWith('-') ? product.discount : product.discount.toUpperCase()}
                </span>
            )}

            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-2">
                    {product.category}
                </p>
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                        {formatCurrency(displayPrice)}
                    </span>
                    {isPromotional && (
                        <span className="text-sm text-gray-400 line-through">
                            {formatCurrency(originalPrice)}
                        </span>
                    )}
                </div>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={`/products/${product.id}`} className="bg-white text-amber-600 font-semibold py-3 px-8 hover:bg-gray-100 transition">
                    Visualizar produto
                </Link>
                <div className="flex space-x-6 mt-4 text-white text-sm">
                    <button className="flex items-center hover:text-amber-400 transition">
                        <span className="mr-1">🔗</span> Compartilhe
                    </button>
                    <button className="flex items-center hover:text-amber-400 transition">
                        <span className="mr-1">🔄</span> Compare
                    </button>
                    <button className="flex items-center hover:text-amber-400 transition">
                        <span className="mr-1">❤️</span> Curta
                    </button>
                </div>
            </div>
        </div>
    );
};