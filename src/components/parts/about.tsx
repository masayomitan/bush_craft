import styles from '../../styles/module/about.module.css';
import commonStyles from '../../styles/module/common.module.css';
import Link from 'next/link';

const TopExplain = () => {
    return (
        <>
            <div className={styles.contentAbout}>    
                <section id="about">
                    <div className={styles.buttonContainer}>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd8_wBLF_Q24rt5dt3T0apcQ4EY-JD5qxoPgYMK9erZ_rHVGA/viewform" target="_blank" className={styles.contactButton}>
                            お申込みはこちら
                        </Link>
                    </div>
                    <div className={styles.sectionBox}>
                        <h2 className={styles.sectionTitle}>このサークルについて</h2>
                        <p className={styles.sectionContent}>
                            <b className={commonStyles.bold}>“その辺のものでなんとかする”</b>をテーマに、ブッシュクラフトの技術を使って、リュック一つでできる身軽なキャンプや焚火をする社会人サークルです。
                        </p>
                        <p className={styles.sectionContent}>
                            ただ遊ぶだけではなく、他の参加者とも交流ができ、ブッシュクラフトのスキルが学べることが特徴です。
                        </p>
                        <p className={styles.sectionContent}>
                            自分の気になる会や日程の会う日にご参加ください(‘ω’)
                        </p>
                    </div>
                </section>

                <section id="bushcraft" className={styles.sectionBoxBg}>
                    <div className={`${styles.sectionBox} ${commonStyles.pb40}`}>
                        <h2 className={`${styles.sectionTitle} ${commonStyles.pt30}`}>Bushcraftとは</h2>
                        <p className={styles.sectionContent}>
                            ブッシュクラフトを簡単に表現すると、<span className={commonStyles.bold}>少ない荷物でより自然を利用したキャンプスタイル</span>のことです。
                        </p>
                        <p className={styles.sectionContent}>
                            参加していくと、自分で目利きした自然の素材で火起こしができるようになったり、道具を作り出せたり、野宿のスキルを身につけられます。学校や会社では学べない生きる力が身に付き、経験値を大量に稼げます。
                        </p>
                        <p className={styles.sectionContent}>
                            日本でのブッシュクラフトはハードルが高かったりしますが、初心者でも楽しめるように、必要なことをワークショップ形式で学びながら実践できるようにしています。
                        </p>
                        <p className={styles.sectionContent}>
                            ディスカバリーチャンネルが好きな人にはこの上なくピッタリです。潔癖症の方にはあまり向いてないかもしれません。
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default TopExplain;
