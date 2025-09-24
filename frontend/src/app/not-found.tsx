import React from 'react';
import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-16">
      <Compass size={100} className="text-gray-400 mb-6" />
      
      <h1 className="text-6xl font-bold text-gray-800 mb-4">
        Oops!
      </h1>
      
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        Página não encontrada
      </h2>
      
      <p className="text-lg text-gray-500 max-w-md mb-8">
        Não conseguimos encontrar o endereço que você tentou acessar. O portal que você procurou não existe mais.
      </p>
      
      <Link 
        href="/"
        className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
      >
        Voltar à Página Inicial
      </Link>
    </div>
  );
}