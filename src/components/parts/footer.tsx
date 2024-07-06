import Link from 'next/link';
import Image from 'next/image';
import '../../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">東京ブッシュクラフト</div>
            <ul className="footer-links">
            <li><Link href="#top">トップ</Link></li>
                <li><Link href="#about">このサークルについて</Link></li>
                <li><Link href="#bushcraft">Bushcraftとは</Link></li>
                <li><Link href="#staff">スタッフ紹介</Link></li>
                <li><Link href="#plans">プラン料金表</Link></li>
                <li><Link href="#faq">よくあるご質問</Link></li>
                <li><Link href="#contact">お申込み・お問い合わせ</Link></li>
                <li><Link href="#gallery">ギャラリー</Link></li>
            </ul>
            <div className="footer-icons">
                <Link href="https://instagram.com"><Image src="/images/instagram-icon.png" alt="Instagram" width={24} height={24} /></Link>
                <Link href="https://twitter.com"><Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} /></Link>
            </div>
            <Link href="/privacy-policy"><div className="footer-policy">プライバシーポリシー</div></Link>
            <div>©2024 Tokyo Bushcraft Inc.</div>
        </footer>
    );
}

export default Footer;
