import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/module/top.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setShowOverlay(!showOverlay);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {isHomePage && (
                <div className={styles.backgroundImage}>
                    <Image 
                        src="/images/top/top_image@2x.png" 
                        alt="top" 
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            )}
            <div className={styles.headerContainer}>
                <button onClick={toggleMenu} className={styles.menuButton}>
                    <span className={isHomePage ? styles.menuBar : styles.menuBarGreen}></span>
                    <span className={isHomePage ? styles.menuBar : styles.menuBarGreen}></span>
                    <span className={isHomePage ? styles.menuBar : styles.menuBarGreen}></span>
                </button>
                {menuOpen && (
                    <div className={styles.menuDropdown}>
                        <button onClick={closeMenu} className={styles.closeButton}>×</button>
                        <Link href="/"><div className={styles.menuItem} onClick={closeMenu}>トップ</div></Link>
                        <Link href="#about"><div className={styles.menuItem} onClick={closeMenu}>このサークルについて</div></Link>
                        <Link href="#bushcraft"><div className={styles.menuItem} onClick={closeMenu}>Bushcraftとは</div></Link>
                        <Link href="#staff"><div className={styles.menuItem} onClick={closeMenu}>スタッフ紹介</div></Link>
                        <Link href="#plan"><div className={styles.menuItem} onClick={closeMenu}>プラン料金表</div></Link>
                        <Link href="#faq"><div className={styles.menuItem} onClick={closeMenu}>よくあるご質問</div></Link>
                        <Link href="#contact"><div className={styles.menuItem} onClick={closeMenu}>お申込み・お問い合わせ</div></Link>
                        <Link href="#gallery"><div className={styles.menuItem} onClick={closeMenu}>ギャラリー</div></Link>
                    </div>
                )}
            </div>

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
        </>
    );
};

export default Header;
