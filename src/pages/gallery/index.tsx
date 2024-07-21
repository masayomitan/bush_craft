import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/module/gallery.module.css';

const images = [
    '/images/gallery/work@2x.png',
    '/images/gallery/work2@2x.png',
    '/images/gallery/gather@2x.png',
    '/images/gallery/gather2@2x.png',
    '/images/gallery/bed@2x.png',
    '/images/gallery/bed2@2x.png',
    '/images/gallery/fire@2x.png',
    '/images/gallery/sunset@2x.png',
];

const GalleryPage = () => {
    const router = useRouter();

    return (
        <div className={styles.galleryContainer}>
            <div>
                <div className={styles.sectionTitle}>ギャラリー</div>
            </div>
            <div className={styles.galleryGrid}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageContainerGrid}>
                        <Image 
                            src={src} 
                            alt={`Gallery Image ${index + 1}`} 
                            width={200} 
                            height={200} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
