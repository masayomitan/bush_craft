import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import About from '../components/parts/about';
import Staff from '@/components/parts/staff';
import Plan from '@/components/parts/plan';
import Footer from '@/components/parts/footer';
import '../styles/top.css';

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
                <div className="background-image">
                    <button onClick={toggleMenu} className="menu-button">
                        <span className="menu-bar"></span>
                        <span className="menu-bar"></span>
                        <span className="menu-bar"></span>
                    </button>
                    {menuOpen && (
                        <div className="menu-dropdown">
                            <Link href="/"><div className="menu-item">Home</div></Link>
                            <Link href="/about"><div className="menu-item">About</div></Link>
                            <Link href="/program"><div className="menu-item">Program</div></Link>
                            <Link href="/contact"><div className="menu-item">Contact</div></Link>
                        </div>
                    )}
                    <div className="button-container">
                        <button className="contact-button">
                            お申込・お問い合わせはこちら
                        </button>
                    </div>
                </div>
                <div className="content-container">    
                    <About />
                    <Staff />
                    <Plan />
                </div>
                <Footer />

                <div
                    className={`overlay ${showOverlay ? 'show' : ''}`}
                    onClick={handleToggle}
                ></div>
    
                <div className={`side-menu ${isOpen ? 'open' : ''}`}
                    onClick={handleToggle}
                >
                    <button className="close-button" onClick={handleToggle}>x</button>
                    <ul onClick={e => e.stopPropagation()}>
                        <li className="side-menu-item">メニュー1</li>
                        <li className="side-menu-item">メニュー2</li>
                        <li className="side-menu-item">メニュー3</li>
                        <li className="side-menu-item">メニュー4</li>
                        <li className="side-menu-item">メニュー5</li>
                        <li className="side-menu-item">メニュー6</li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;
