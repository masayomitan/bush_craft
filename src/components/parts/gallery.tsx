import Image from 'next/image';
import Link from 'next/link';
import galleryStyles from '../../styles/module/gallery.module.css';
import Viewmore from '../atoms/viewmore.svg';
import { galleryImages } from '../../constants/images'

const Gallery = () => {
    return (
        <div className={galleryStyles.galleryContainer}>
            <div id="gallery" className={galleryStyles.sectionTitle}>ギャラリー</div>
            <div className={galleryStyles.gallery}>
                {galleryImages.map((src, index) => (
                    <div key={index} className={galleryStyles.imageContainer}>
                        <Image 
                            src={src} 
                            alt={`Gallery Image ${index + 1}`} 
                            width={200}
                            height={200} 
                        />
                    </div>
                ))}
            </div>
            <div className={galleryStyles.buttonContainer}>
                <Link href="/gallery">
                    <Viewmore className={galleryStyles.viewMore} />
                </Link>
            </div>
        </div>
    );
};

export default Gallery;
