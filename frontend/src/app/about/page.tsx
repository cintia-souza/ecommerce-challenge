import React from 'react';

export default function AboutPage() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
                    Nossa História
                </h1>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Na Crônicas da Távola, cada livro é um portal para um novo mundo.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Nossa Missão
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Acreditamos que a magia de uma história pode nos transformar. Nossa missão é ser o elo entre os leitores e os mundos fantásticos que desejam explorar, oferecendo não apenas livros, mas uma curadoria cuidadosa de lendas e aventuras. Somos os guardiões de lendas, os cartógrafos de terras desconhecidas e os anfitriões de heróis e vilões que habitam as páginas.
                        </p>
                    </div>
                    <div>
                        <img 
                            src="/images/about-vision.png" 
                            alt="Uma biblioteca aconchegante cheia de livros de fantasia"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="p-8 bg-gray-100 rounded-lg shadow-inner">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Nossos Valores
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-amber-600">Comunidade</h3>
                            <p className="text-gray-700">
                                Unimos amantes de fantasia, criando um espaço onde as histórias podem ser compartilhadas.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-amber-600">Curadoria</h3>
                            <p className="text-gray-700">
                                Selecionamos cada título com paixão, garantindo que cada livro seja um portal de alta qualidade.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-amber-600">Aventura</h3>
                            <p className="text-gray-700">
                                Incentivamos a busca por novas narrativas, com a promessa de uma jornada épica a cada leitura.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}