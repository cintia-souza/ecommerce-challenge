'use client';

import React from 'react';
import { User, Search, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCartContext } from '@/context/CartContext'; 

export default function Header() {
    const { cart, toggleCart  } = useCartContext();
    const totalItems = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Loja', href: '/shop' },
        { name: 'Sobre', href: '/about' },
        { name: 'Contato', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 h-24 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-3xl font-bold text-gray-900">
                        Crônicas da Távola
                    </Link>
                </div>
                
                <nav className="hidden md:flex space-x-16 text-lg font-medium">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="text-gray-600 hover:text-gray-900 transition duration-150"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-8">
                    <button aria-label="Conta de Usuário" className="text-gray-700 hover:text-gray-900">
                        <User size={24} />
                    </button>
                    
                    <button aria-label="Pesquisar" className="text-gray-700 hover:text-gray-900">
                        <Search size={24} />
                    </button>

                    <button aria-label="Lista de Desejos" className="text-gray-700 hover:text-gray-900">
                        <Heart size={24} />
                    </button>


                    <button 
                        onClick={toggleCart}
                        aria-label="Carrinho de Compras" 
                        className="relative text-gray-700 hover:text-gray-900"
                    >
                        <ShoppingCart size={24} />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}