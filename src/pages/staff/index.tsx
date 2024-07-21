import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/module/staff.module.css';
import topStyles from '../../styles/module/top.module.css';
import aboutStyles from '../../styles/module/about.module.css';
import commonStyles from '../../styles/module/common.module.css';
import galleryStyles from '../../styles/module/gallery.module.css';

const StaffPage = () => {

    const images = [
        '/images/gallery/work@2x.png',
        '/images/gallery/work2@2x.png',
        '/images/gallery/gather@2x.png',
        '/images/gallery/gather2@2x.png',
        '/images/gallery/bed@2x.png',
        '/images/gallery/bed2@2x.png',
        '/images/gallery/fire@2x.png',
        '/images/gallery/sunset@2x.png',
    ]

    return (
        <>
        <div className={`${topStyles.contentContainer} ${commonStyles.fs16}`}>
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
                        <p className={`${commonStyles.bold} ${commonStyles.fs18}`}>メッセージ</p>
                        <p>社会人ブッシュクラフトサークルという形で、参加者とキャンプをしながら火起こしや自然に目を向けることの楽しさを伝えています。普通のキャンプに比べ、少しハードルが高く感じがちですが、初心者でもできるようにきちんとレベルを合わせて内容を組んでいます。</p>
                        <p>是非遊びに来てね(‘ω’)</p>
                        
                    </div>
                    <div className={`${styles.staffMessage}`}>
                        <p className={`${commonStyles.bold} ${commonStyles.fs18}`}>略歴</p>
                        <p>幼少期。ゲームのRPGなどが好きで、冒険やサバイバルに興味を持つ。 </p>
                        <p>バックパッカーとして世界をまわるなか、2020年。コロナ過になり始めたころ、予定が全て吹っ飛んだため、興味があったブッシュクラフトを独学で始め、同時にインストラクターとしても活動を開始。</p>
                        <p>限られた道具と、あるものや自然を活かした知恵は旅もブッシュクラフトも共通していての、知ることで変わる景色や、できることが増える面白さを広めるべく活動している。</p>
                        <p>旅人時代には、アラビア人から交渉して馬を手に入れ、アフリカのアトラス山脈を越える300kmの冒険や、南米のジャングルにリュック一つで滞在し生還みたいことをよくやっていた。</p>
                    </div>
                    <div className={`${styles.staffMessage}`}>
                        <p className={`${commonStyles.bold} ${commonStyles.fs18}`}>アウトドア系所持資格</p>
                        <p>・JBS認定ブッシュクラフトインストラクター® </p>
                        <p>・日本キャンプ協会公認キャンプインストラクター</p>
                        <p>・BBQインストラクター</p>
                        <p>・PADI Adventureライセンス</p>
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
                            <p className={`${commonStyles.bold} ${commonStyles.fs18}`}>メッセージ</p>
                            <p>主催の技術補助のほか、料理を担当。</p>
                            <p>簡単でおいしく、お腹いっぱい！がモットー。
                            キャンプ料理と家庭料理の良さを交ぜながら、毎回参加しても飽きないご飯を提供しています。
                            ブッシュクラフトを食の面からも楽しんでくださいね！</p>
                            <p>虫や、お悩み相談も得意です。</p>
                        </div>
                        <div className={`${galleryStyles.staffMessage}`}>
                            <p className={`${commonStyles.bold} ${commonStyles.fs18}`}>料理</p>
                            <div className={galleryStyles.gallery}>
                                {images.map((src, index) => (
                                    <div key={index} className={galleryStyles.imageContainer}>
                                        <Image 
                                            src={src} 
                                            alt={`Gallery Image ${index + 1}`} 
                                            width={200} 
                                            height={200} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </>
    );
}

export default StaffPage;
