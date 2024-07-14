import Image from 'next/image';
import styles from '../../styles/module/gallery.module.css';
import Viewmore from '../atoms/viewmore.svg';

const images = [
    '/images/gallery/work@2x.png',
    '/images/gallery/work2@2x.png',
    '/images/gallery/gather@2x.png',
    '/images/gallery/gather2@2x.png',
    '/images/gallery/bed@2x.png',
    '/images/gallery/bed2@2x.png',
    '/images/gallery/fire@2x.png',
    '/images/gallery/sunset@2x.png',
]

const Gallery = () => {
    return (
        <div className={styles.galleryContainer}>
            <div>
                <div className={styles.sectionTitle}>ギャラリー</div>
            </div>
            <div className={styles.gallery}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <Image 
                            src={src} 
                            alt={`Gallery Image ${index + 1}`} 
                            width={200} 
                            height={200} 
                        />
                    </div>
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <Viewmore className={styles.viewMore} />
            </div>
        </div>
    );
};

export default Gallery;
