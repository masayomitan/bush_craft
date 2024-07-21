import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '../components/parts/footer';
import Header from '../components/parts/header';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
