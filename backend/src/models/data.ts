import type { Product } from "../types/product.ts";


export const allProducts: Product[] = [
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
        description: 'No Submundo de Nova York, a caçadora de sombras Clary Fray precisa descobrir quem é e de onde veio, antes que o tempo se esgote.',
    },
    {
        id: 'Tolkien-book',
        name: 'Lord of the Ring',
        category: 'Medieval',
        price: 14000,
        promotionalPrice: 7000,
        discount: '-50%',
        image: '/images/Tolkien-book.jpg',
        description: 'A jornada de Frodo Bolseiro para destruir o Um Anel e derrotar o Senhor do Escuro Sauron.',
    },
    {
        id: 'box-harry-potter',
        name: 'Box Harry Potter',
        category: 'Sobrenatural',
        price: 5000,
        promotionalPrice: null,
        discount: 'Hot',
        image: '/images/box-harry-potter.jpg',
        description: 'A coleção completa das aventuras de Harry Potter no mundo da magia.',
    },
];

export const mockProduct = allProducts[0];