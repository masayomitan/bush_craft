import Image from 'next/image';
import styles from '../../styles/module/staff.module.css';
import aboutStyles from '../../styles/module/about.module.css';
import commonStyles from '../../styles/module/common.module.css';
import Viewmore from '../atoms/viewmore.svg';

const Staff = () => {
    return (
        <>
            <div className={aboutStyles.contentAbout}>    
                <section id="staff" className={aboutStyles.sectionBox}>
                    <h2 className={aboutStyles.sectionTitle}>スタッフ紹介</h2>
                    <div className={`${styles.staffCardContainer} ${commonStyles.flex}`}>
                        <div className={styles.staffImageBox}>
                            test
                        </div>
                        <div className="staff-card">
                            <div className={`${commonStyles.fs18} ${commonStyles.bold}`}>主催</div>
                            <div className={`${commonStyles.fs10} ${commonStyles.ml40}`}>Shinya Kazuhiko</div>
                            <div className={`${commonStyles.fs26} ${commonStyles.mt5}`}>新谷 和彦</div>
                            <div className={commonStyles.fs18}>
                                <p className={commonStyles.bold}>ニックネーム</p>
                                <p>ピコさん</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.staffMessage}`}>
                        <p className={commonStyles.bold}>メッセージ</p>
                        社会人ブッシュクラフトサークルという形で、参加者とキャンプをしながら火起こしや自然に目を向けることの楽しさを伝えています。普通のキャンプに比べ、少しハードルが高く感じがちですが、初心者でもできるようにきちんとレベルを合わせて内容を組んでいます。是非遊びに来てね(‘ω’)
                    </div>
                    <div className={commonStyles.taR}>
                        <Viewmore className={styles.viewMore} />
                    </div>
                </section>

                <section className={aboutStyles.sectionBoxBg}>
                    <div className={`${aboutStyles.sectionBox} ${commonStyles.pb40}`}>
                        <div className={`${styles.staffCardContainer} ${commonStyles.pt40}`}>
                            <div className={styles.staffImageBox}>
                                <Image 
                                    src="/images/person/6407_0@2x.png" 
                                    alt="Ozawa Mariko" 
                                    width={150}
                                    height={150}
                                    style={{ 
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                            <div className="staff-card">
                                <div className={`${commonStyles.fs18} ${commonStyles.bold}`}>助手</div>
                                <div className={`${commonStyles.fs10} ${commonStyles.ml40}`}>Ozawa Mariko</div>
                                <div className={`${commonStyles.fs26} ${commonStyles.mt5}`}>小澤 麻理子</div>
                                <div className={commonStyles.fs18}>
                                    <p className={commonStyles.bold}>ニックネーム</p>
                                    <p>まりこさん</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.staffMessage}`}>
                            <p className={commonStyles.bold}>メッセージ</p>
                            主催の技術補助のほか、料理を担当。
                            簡単でおいしく、お腹いっぱい！がモットー。
                            キャンプ料理と家庭料理の良さを交ぜながら、毎回参加しても飽きないご飯を提供しています。
                            ブッシュクラフトを食の面からも楽しんでくださいね！
                            虫や、お悩み相談も得意です。
                        </div>
                        <div className={styles.buttonContainer}>
                            <Viewmore className={styles.viewMore} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Staff;
