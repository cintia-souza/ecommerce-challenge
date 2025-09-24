import Footer from '@/components/Footer';
import BrowseTheRange from '@/components/home/BrowseTheRange';
import HeroBanner from '@/components/home/HeroBanner';
import OurProducts from '@/components/home/OurProducts';


export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">           
            <main>
                <HeroBanner />
                <BrowseTheRange />
                <OurProducts />
            </main>
            <Footer />
        </div>
    );
}