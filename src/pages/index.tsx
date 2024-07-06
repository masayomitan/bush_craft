import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import About from '../components/parts/about';
import Staff from '@/components/parts/staff';
import Plan from '@/components/parts/plan';
import Footer from '@/components/parts/footer';

import styles from '../styles/module/top.module.css';
import commonStyles from '../styles/module/common.module.css';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setShowOverlay(!showOverlay);
    };

    return (
        <>
            <main>
                <div className={styles.backgroundImage}>
                    <Image 
                        src="/images/top/top_image@2x.png" 
                        alt="top" 
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <button onClick={toggleMenu} className={styles.menuButton}>
                        <span className={styles.menuBar}></span>
                        <span className={styles.menuBar}></span>
                        <span className={styles.menuBar}></span>
                    </button>
                    {menuOpen && (
                        <div className={styles.menuDropdown}>
                            <Link href="/"><div className={styles.menuItem}>Home</div></Link>
                            <Link href="#about"><div className={styles.menuItem}>About</div></Link>
                            <Link href="#program"><div className={styles.menuItem}>Program</div></Link>
                            <Link href="#contact"><div className={styles.menuItem}>Contact</div></Link>
                        </div>
                    )}
                    <div className={styles.buttonContainer}>
                        <button className={styles.contactButton}>
                            お申込・お問い合わせはこちら
                        </button>
                    </div>
                </div>
                <div className={`${styles.contentContainer} ${commonStyles.fs16}`}>
                    <About />
                    <Staff />
                    <Plan />
                </div>
                <Footer />

                <div
                    className={`${styles.overlay} ${showOverlay ? styles.show : ''}`}
                    onClick={handleToggle}
                ></div>

                <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}
                    onClick={handleToggle}
                >
                    <button className={styles.closeButton} onClick={handleToggle}>x</button>
                    <ul onClick={e => e.stopPropagation()}>
                        <li className={styles.sideMenuItem}>メニュー1</li>
                        <li className={styles.sideMenuItem}>メニュー2</li>
                        <li className={styles.sideMenuItem}>メニュー3</li>
                        <li className={styles.sideMenuItem}>メニュー4</li>
                        <li className={styles.sideMenuItem}>メニュー5</li>
                        <li className={styles.sideMenuItem}>メニュー6</li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;
