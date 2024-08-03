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
                        <Link href="/" legacyBehavior>
                            <a className={styles.menuItem} onClick={closeMenu}>トップ</a>
                        </Link>
                        <Link href="#about" legacyBehavior>
                            <a className={styles.menuItem} onClick={closeMenu}>このサークルについて</a>
                        </Link>
                        <Link href="#bushcraft" legacyBehavior>
                            <a className={styles.menuItem} onClick={closeMenu}>Bushcraftとは</a>
                        </Link>
                        <Link href="#staff" legacyBehavior>
                            <a className={styles.menuItem} onClick={closeMenu}>スタッフ紹介</a>
                        </Link>
                        <Link href="#plan" legacyBehavior>
                            <a className={styles.menuItem} onClick={closeMenu}>プラン料金表</a>
                        </Link>
                        <Link href="#faq" legacyBehavior>
                            <a className={styles.menuItem} onClick={closeMenu}>よくあるご質問</a>
                        </Link>
                        <Link href="#contact" legacyBehavior>
                            <a className={styles.menuItem} onClick={closeMenu}>お申込み・お問い合わせ</a>
                        </Link>
                        <Link href="#gallery" legacyBehavior>
                            <a className={styles.menuItem} onClick={closeMenu}>ギャラリー</a>
                        </Link>
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
