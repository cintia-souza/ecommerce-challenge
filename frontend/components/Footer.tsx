import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 mt-16">
            <div className="container mx-auto px-4 py-10 text-gray-600 text-center">
                <p>&copy; {new Date().getFullYear()} Crônicas da Távola. All rights reserved.</p>
                <p className="text-sm mt-2">
                    Direitos reservados a Crônicas da Távola. Desenvolvido com Next.js e TypeScript.
                </p>
            </div>
        </footer>
    );
}