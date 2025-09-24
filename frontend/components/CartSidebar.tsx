'use client';

import { useCartContext } from '@/context/CartContext';
import { formatCurrency } from '@/lib/api';
import { Trash2, X } from 'lucide-react';

export default function CartSidebar() {
    const { cart, isLoading, isCartOpen, toggleCart, removeItemFromCart } = useCartContext();

    const totalItems = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
    const isCartEmpty = totalItems === 0;

    return (
        <>
            {isCartOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
                    onClick={toggleCart}
                ></div>
            )}
            
            <aside className={`
                fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 border-l border-gray-100 p-4 transition-transform duration-300
                ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h2 className="text-2xl font-bold">Seu Carrinho ({totalItems})</h2>
                    <button onClick={toggleCart} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                {isLoading ? (
                    <div className="text-center py-8">Carregando Carrinho...</div>
                ) : isCartEmpty ? (
                    <div className="text-center py-8 text-gray-500">Seu carrinho está vazio.</div>
                ) : (
                    <>
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                            {cart?.items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b pb-2">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                                            <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.quantity} x {formatCurrency(item.promotionalPrice || item.price)}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => removeItemFromCart(item.id)} className="text-red-500 hover:text-red-700 p-1">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t">
                            <div className="flex justify-between font-bold text-lg mb-4">
                                <span>Subtotal:</span>
                                <span>{formatCurrency(cart?.subtotal || 0)}</span>
                            </div>
                            <button className="w-full py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition">
                                Finalizar Compra
                            </button>
                        </div>
                    </>
                )}
            </aside>
        </>
    );
}