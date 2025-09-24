import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
    name: string;
    imageSrc: string;
    href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageSrc, href }) => (
    <Link href={href} className="group block text-center">
        <div className="h-96 rounded-lg overflow-hidden shadow-lg mb-4">
            <img 
                src={imageSrc} 
                alt={name} 
                className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
            />
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition">
            {name}
        </h3>
    </Link>
);

export default function BrowseTheRange() {
    return (
        <section className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Escolha os temas
            </h2>
            <p className="text-gray-600 mt-2 mb-10">
                Existem vários tipos de fantasias, sempre existe aquela que te agrada mais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CategoryCard name="Sobrenatural" imageSrc="/images/instrumentos-mortais.jpg" href="/shop?category=sobrenatural" />
                <CategoryCard name="Contos" imageSrc="/images/once-upon-a-time.jpg" href="/shop?category=contos" />
                <CategoryCard name="Medieval" imageSrc="/images/Tolkien-book.jpg" href="/shop?category=medieval" />
            </div>
        </section>
    );
}