import { useState, useEffect } from 'react';
import Header from '../components/parts/header'
import Top from '../components/parts/top'
import Image from 'next/image'
import Link from 'next/link';



const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/images/image1.jpeg',
        '/images/image2.jpeg',
        '/images/image3.jpeg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(interval); // コンポーネントがアンマウントされたときにintervalをクリア
      }, [images.length])

    return (
        <>
            <Header />
            <main className="max-w-screen-lg mx-auto mt-28">
                <div className="flex flex-col items-center min-h-80 mt-28">
                    <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8">
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

                    <div className="my-2 mx-7">
                        テストコメントテストコメントテストコメントテストコメントテストコメント
                        テストコメントテストコメントテストコメントテストコメントテストコメント
                        テストコメントテストコメントテストコメントテストコメントテストコメント
                        テストコメントテストコメントテストコメントテストコメントテストコメント
                </div>
                </div>
                <Top />
            </main>




        </>
    );
}

export default Home