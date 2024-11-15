import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import About from '../components/parts/about';
import Staff from '@/components/parts/staff';
import Plan from '@/components/parts/plan';
import Question from '@/components/parts/question';
import Contact from '@/components/parts/contact';
import Gallery from '@/components/parts/gallery';
// import Footer from '@/components/parts/footer';
// import Header from '@/components/parts/header';

import styles from '../styles/module/top.module.css';
import commonStyles from '../styles/module/common.module.css';

const Home = () => {


    return (
        <>
            <main>
                <div className={`${styles.contentContainer} ${commonStyles.fs16}`}>
                    <About />
                    <Staff />
                    <Plan />
                    <Question />
                    <Contact />
                    <Gallery />
                </div>
            </main>
        </>
    );
};

export default Home;
