import { useState, useEffect } from 'react';
import Header from '../components/parts/header'
import Top from '../components/parts/topExplain'
import Image from 'next/image'
import Link from 'next/link';
import Program from '@/components/parts/program';
import Profile from '@/components/parts/profile';
import Contact from '@/components/parts/contact';
import About from '@/components/parts/about';
import Footer from '@/components/parts/footer';



const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/images/image1.jpeg',
        '/images/image2.jpeg',
        '/images/image3.jpeg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
    
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <>
            <main>
                <Header />
                <section className="bg-cover bg-center bg-no-repeat" 
                        style={{ backgroundImage: 'url(/images/top_image.jpeg)'}}
                    >
                    <div className="flex flex-col items-center min-h-100">
                        <div className="mt-20 relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8">
                            {images.map((img, index) => (
                                <Image
                                    key={img}
                                    src={img}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>

                        <div className="my-2 mx-7 text-white text-2xl">
                            テストコメントテストコメントテストコメントテストコメントテストコメント
                            テストコメントテストコメントテストコメントテストコメントテストコメント
                            テストコメントテストコメントテストコメントテストコメントテストコメント
                            テストコメントテストコメントテストコメントテストコメントテストコメント
                        </div>
                    </div>
                </section>
                <div className="max-w-screen-lg mx-auto relative">    
                    <Top />
                    <Program />
                    <About />
                    <Profile />
                    <Contact />
                </div>
                <Footer />
            </main>
        </>
    );
}

export default Home