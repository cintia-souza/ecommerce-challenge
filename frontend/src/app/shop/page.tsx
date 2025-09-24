'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

const allProducts = [
     {
        id: 'o-despertar-da-lua-caida',
        name: 'O despertar da lua caída',
        category: 'Mistério',
        price: 25000,
        promotionalPrice: 20000,
        discount: '-30%',
        image: '/images/o-despertar-da-lua-caida.jpg',
        description: 'Como uma assassina de um grupo opositor ao reinado do Grado, o trabalho de Raeve é cumprir ordens e nunca ser pega. Mas, quando um caçador de recompensas demonstra um interesse particular nela, sangue é derramado, corações são partidos e Raeve é levada pela Guilda dos Nobres: um grupo de feéricos poderosos que decidem fazer de sua execução um exemplo.',

    },
    {
        id: 'instrumentos-mortais',
        name: 'Os instrumentos Mortais',
        category: 'Sobrenatural',
        price: 25000,
        promotionalPrice: null,
        discount: 'New',
        image: '/images/instrumentos-mortais.jpg',
        description: 'Um exemplo',
    },
    {
        id: 'Tolkien-book',
        name: 'Lord of the Ring',
        category: 'Medieval',
        price: 14000,
        promotionalPrice: 7000,
        discount: '-50%',
        image: '/images/Tolkien-book.jpg',
        description: 'Um exemplo',
    },
    {
        id: 'box-harry-potter',
        name: 'Box Harry Potter',
        category: 'Sobrenatural',
        price: 5000,
        promotionalPrice: null,
        discount: 'Hot',
        image: '/images/box-harry-potter.jpg',
        description: 'Um exemplo',
    },
     {
        id: 'o-despertar-da-lua-caida',
        name: 'O despertar da lua caída',
        category: 'Mistério',
        price: 25000,
        promotionalPrice: 20000,
        discount: '-30%',
        image: '/images/o-despertar-da-lua-caida.jpg',
        description: 'Como uma assassina de um grupo opositor ao reinado do Grado, o trabalho de Raeve é cumprir ordens e nunca ser pega. Mas, quando um caçador de recompensas demonstra um interesse particular nela, sangue é derramado, corações são partidos e Raeve é levada pela Guilda dos Nobres: um grupo de feéricos poderosos que decidem fazer de sua execução um exemplo.',

    },
    {
        id: 'instrumentos-mortais',
        name: 'Os instrumentos Mortais',
        category: 'Sobrenatural',
        price: 25000,
        promotionalPrice: null,
        discount: 'New',
        image: '/images/instrumentos-mortais.jpg',
        description: 'Um exemplo',
    },
    {
        id: 'Tolkien-book',
        name: 'Lord of the Ring',
        category: 'Medieval',
        price: 14000,
        promotionalPrice: 7000,
        discount: '-50%',
        image: '/images/Tolkien-book.jpg',
        description: 'Um exemplo',
    },
    {
        id: 'box-harry-potter',
        name: 'Box Harry Potter',
        category: 'Sobrenatural',
        price: 5000,
        promotionalPrice: null,
        discount: 'Hot',
        image: '/images/box-harry-potter.jpg',
        description: 'Um exemplo',
    },
     {
        id: 'o-despertar-da-lua-caida',
        name: 'O despertar da lua caída',
        category: 'Mistério',
        price: 25000,
        promotionalPrice: 20000,
        discount: '-30%',
        image: '/images/o-despertar-da-lua-caida.jpg',
        description: 'Como uma assassina de um grupo opositor ao reinado do Grado, o trabalho de Raeve é cumprir ordens e nunca ser pega. Mas, quando um caçador de recompensas demonstra um interesse particular nela, sangue é derramado, corações são partidos e Raeve é levada pela Guilda dos Nobres: um grupo de feéricos poderosos que decidem fazer de sua execução um exemplo.',

    },
    {
        id: 'instrumentos-mortais',
        name: 'Os instrumentos Mortais',
        category: 'Sobrenatural',
        price: 25000,
        promotionalPrice: null,
        discount: 'New',
        image: '/images/instrumentos-mortais.jpg',
        description: 'Um exemplo',
    },
    {
        id: 'Tolkien-book',
        name: 'Lord of the Ring',
        category: 'Medieval',
        price: 14000,
        promotionalPrice: 7000,
        discount: '-50%',
        image: '/images/Tolkien-book.jpg',
        description: 'Um exemplo',
    },
    {
        id: 'box-harry-potter',
        name: 'Box Harry Potter',
        category: 'Sobrenatural',
        price: 5000,
        promotionalPrice: null,
        discount: 'Hot',
        image: '/images/box-harry-potter.jpg',
        description: 'Um exemplo',
    },
];


export default function ShopPage() {
    const searchParams = useSearchParams();
    const categoryFilter = searchParams.get('category');

    const filteredProducts = categoryFilter 
        ? allProducts.filter(product => product.category.toLowerCase() === categoryFilter.toLowerCase())
        : allProducts; 

    return (
        <div className="bg-gray-50">
            <div className="bg-amber-100 py-20 text-center">
                <h1 className="text-5xl font-extrabold text-amber-900">
                    {categoryFilter ? categoryFilter : 'Todos os Livros'}
                </h1>
                <p className="text-lg text-gray-700 mt-2">
                    Encontre sua próxima grande aventura.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg">Nenhum livro encontrado nesta categoria.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}