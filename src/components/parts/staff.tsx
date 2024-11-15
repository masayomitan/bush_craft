import Image from 'next/image';
import Link from 'next/link';
import staffStyles from '../../styles/module/staff.module.css';
import aboutStyles from '../../styles/module/about.module.css';
import commonStyles from '../../styles/module/common.module.css';
import Viewmore from '../atoms/viewmore.svg';

const Staff = () => {
    return (
        <>
            <div className={aboutStyles.contentAbout}>    
                <section id="staff" className={aboutStyles.sectionBox}>
                    <h2 className={aboutStyles.sectionTitle}>スタッフ紹介</h2>
                    <div className={`${staffStyles.staffCardContainer} ${commonStyles.flex}`}>
                        <div className={staffStyles.staffImageBox}>
                            <Image 
                                src="/images/person/piko@2x.png" 
                                alt="Shinya Kazuhiko" 
                                width={150}
                                height={150}
                                style={{ 
                                    objectFit: 'contain',
                                }}
                            />
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
                    <div className={`${staffStyles.staffMessage}`}>
                        <p className={`${commonStyles.bold} ${commonStyles.fs18}`}>メッセージ</p>
                        <p>社会人ブッシュクラフトサークルという形で、参加者とキャンプをしながら火起こしや自然に目を向けることの楽しさを伝えています。普通のキャンプに比べ、少しハードルが高く感じがちですが、初心者でもできるようにきちんとレベルを合わせて内容を組んでいます。</p>
                        <p>是非遊びに来てね(‘ω’)</p>
                    </div>
                    <div className={commonStyles.taR}>
                        <Link href="/staff">
                            <Viewmore className={staffStyles.viewMore} />
                        </Link>
                    </div>
                </section>

                <section className={aboutStyles.sectionBoxBg}>
                    <div className={`${aboutStyles.sectionBox} ${commonStyles.pb40}`}>
                        <div className={`${staffStyles.staffCardContainer} ${commonStyles.pt40}`}>
                            <div className={staffStyles.staffImageBox}>
                                <Image 
                                    src="/images/person/mariko@2x.png" 
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
                        <div className={`${staffStyles.staffMessage}`}>
                            <p className={`${commonStyles.bold} ${commonStyles.fs18}`}>メッセージ</p>
                            <p>主催の技術補助のほか、料理を担当。</p>
                            <p>簡単でおいしく、お腹いっぱい！がモットー。
                            キャンプ料理と家庭料理の良さを交ぜながら、毎回参加しても飽きないご飯を提供しています。
                            ブッシュクラフトを食の面からも楽しんでくださいね！</p>
                            <p>虫や、お悩み相談も得意です。</p>
                        </div>
                        <div className={staffStyles.buttonContainer}>
                            <Link href="/staff">
                                <Viewmore className={staffStyles.viewMore} />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Staff;
