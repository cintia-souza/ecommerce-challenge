import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
                    Entre em Contato
                </h1>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Estamos prontos para ouvir sua história. Envie-nos uma mensagem e faremos o possível para te ajudar.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Informações de Contato */}
                    <div className="p-8 bg-white rounded-lg shadow-md flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Detalhes de Contato
                        </h2>
                        <ul className="space-y-6 text-gray-700">
                            <li className="flex items-start">
                                <MapPin size={24} className="text-amber-600 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Endereço:</p>
                                    <p>Rua Exemplo, 123 <br/> Terra Média, Valinor</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Phone size={24} className="text-amber-600 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Telefone:</p>
                                    <p>+55 (11) 9999-9999</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail size={24} className="text-amber-600 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Email:</p>
                                    <p className="text-amber-600 hover:underline">contato@cronicasdatavola.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}