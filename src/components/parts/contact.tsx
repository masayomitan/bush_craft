import aboutStyles from '../../styles/module/about.module.css';
import styles from '../../styles/module/contact.module.css';
import commonStyles from '../../styles/module/common.module.css';
import topStyles from '../../styles/module/top.module.css';

const Contact = () => {
    return (
        <div>
            <div>
                <div className={`${aboutStyles.sectionTitle} ${styles.sectionTitle}`}>お問い合わせ</div>
            </div>
            <div className={aboutStyles.sectionBox}>
                <p className={styles.sectionContent}>
                    ご不明な点はお気軽にお問い合わせください。また、お仕事・メディア協力のご依頼等もこちらからお問い合わせください。
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.contactButton}>
                        お申込・お問い合わせはこちら
                    </button>
                </div>
                <div className={`${commonStyles.bold} ${commonStyles.fs16} ${commonStyles.mb10}`}>ご依頼内容一例</div>
                <ul className={styles.list}>
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
