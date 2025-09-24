import React from 'react';
import ProductCard from '../ProductCard';

const featuredProducts = [
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


export default function OurProducts() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Outros produtos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            <div className="text-center mt-12">
                <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold py-3 px-10 transition duration-300">
                    Visualizar mais
                </button>
            </div>
        </section>
    );
}