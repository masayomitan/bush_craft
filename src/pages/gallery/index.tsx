import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/module/gallery.module.css';
import { galleryImages } from '../../constants/images'

const GalleryPage = () => {
    const router = useRouter();

    return (
        <div className={styles.galleryContainer}>
            <div>
                <div className={styles.sectionTitle}>ギャラリー</div>
            </div>
            <div className={styles.galleryGrid}>
                {galleryImages.map((src, index) => (
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
