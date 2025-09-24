'use client';

import { getProduct } from '@/lib/api';
import ProductDetails from '@/components/ProductDetails';
import CartSidebar from '@/components/CartSidebar';

interface ProductPageProps {
    params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProduct(params.id);

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <img 
                            src={product.image || '/placeholder.jpg'} 
                            alt={product.name} 
                            className="w-full h-auto object-cover rounded-lg shadow-xl"
                            style={{ aspectRatio: '4/3' }}
                        />
                    </div>
                    <div className="lg:col-span-1">
                        <ProductDetails product={product} />
                    </div>
                </div>
            </main>
            
            <CartSidebar />
        </div>
    );
}
