import React from 'react';

export default function HeroBanner() {
    return (
        <div className="relative h-[80vh] w-full bg-cover bg-center"
             style={{ backgroundImage: "url('/images/hero-bg.jpeg')", backgroundPosition: 'center 20%' }}>
            
            <div className="container mx-auto h-full flex items-center justify-end pr-4 sm:pr-0">
                
                <div className="bg-orange-50/70 p-8 md:p-14 w-full max-w-lg lg:max-w-md backdrop-blur-sm">
                    <p className="text-base font-semibold tracking-wider mb-2">
                        Novo
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-amber-900 leading-tight mb-4">
                        Coleção de livros sobre Fantasias
                    </h1>
                    <p className="text-gray-700 mb-8 text-sm">
                        Conheça e emarque nesse mundo de mistérios de mágias e muitas aventuras.
                    </p>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 transition duration-300">
                        Ver
                    </button>
                </div>
            </div>
        </div>
    );
}