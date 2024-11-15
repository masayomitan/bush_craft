import aboutStyles from '../../styles/module/about.module.css';
import contactStyles from '../../styles/module/contact.module.css';
import commonStyles from '../../styles/module/common.module.css';
import Link from 'next/link';

const Contact = () => {
    return (
        <div>
            <div id="contact" className={`${aboutStyles.sectionTitle} ${contactStyles.sectionTitle}`}>お問い合わせ</div>
            <div className={aboutStyles.sectionBox}>
                <p className={contactStyles.sectionContent}>
                    ご不明な点はお気軽にお問い合わせください。また、お仕事・メディア協力のご依頼等もこちらからお問い合わせください。
                </p>
                <div className={contactStyles.buttonContainer}>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd8_wBLF_Q24rt5dt3T0apcQ4EY-JD5qxoPgYMK9erZ_rHVGA/viewform" target="_blank">
                        お申込みはこちら
                    </Link>
                </div>
                <div className={contactStyles.buttonContainer}>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKhh98MyNi5aydmclYQf_z7ZlRBVAtT5OUdA6RssfznAahhQ/viewform" target="_blank">
                        お問い合わせはこちら
                    </Link>
                </div>
                <div className={`${commonStyles.bold} ${commonStyles.fs16} ${commonStyles.mb10}`}>ご依頼内容一例</div>
                <ul className={contactStyles.list}>
                    <li>・各種ワークショップ</li>
                    <li>・イベントの企画・運営（日帰り・宿泊）</li>
                    <li>・インストラクター出張・派遣</li>
                    <li>・学校・教育機関向け特別授業</li>
                    <li>・グループキャンプ</li>
                    <li>・コラボ企画の持込み</li>
                    <li>・野外教育プログラムの作成・提案など</li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
