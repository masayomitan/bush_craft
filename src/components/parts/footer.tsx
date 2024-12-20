import Link from 'next/link';
import Image from 'next/image';
import footerStyles from '../../styles/module/footer.module.css';
import commonStyles from '../../styles/module/common.module.css';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={commonStyles.between}>
                <div className={footerStyles.footerLogo}>東京ブッシュクラフト</div>
                <div className={footerStyles.footerIcons}>
                    <Link href="https://www.instagram.com/kazuhikosan98/" target="_blank"><Image src="/images/sns/instagram.png" alt="Instagram" width={24} height={24} /></Link>
                    {/* <Link href="https://twitter.com"><Image src="/images/sns/twitter.png" alt="Twitter" width={24} height={24} /></Link> */}
                </div>
            </div>
            <ul className={footerStyles.footerLinks}>
                <li><Link href="#top">トップ</Link></li>
                <li><Link href="#about">このサークルについて</Link></li>
                <li><Link href="#bushcraft">Bushcraftとは</Link></li>
                <li><Link href="#staff">スタッフ紹介</Link></li>
                <li><Link href="#plan">プラン料金表</Link></li>
                <li><Link href="#question">よくあるご質問</Link></li>
                <li><Link href="#contact">お申込み・お問い合わせ</Link></li>
                <li><Link href="#gallery">ギャラリー</Link></li>
            </ul>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKhh98MyNi5aydmclYQf_z7ZlRBVAtT5OUdA6RssfznAahhQ/viewform" target="_blank"><div className={footerStyles.footerPolicy}>お問い合わせ</div></Link>
            <Link href="privacy-policy"><div className={footerStyles.footerPolicy}>プライバシーポリシー</div></Link>
            <div>©2024 Tokyo Bushcraft Inc.</div>
        </footer>
    )
}

export default Footer;
