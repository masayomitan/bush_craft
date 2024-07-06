import aboutStyles from '../../styles/module/about.module.css';
import styles from '../../styles/module/plan.module.css';
import commonStyles from '../../styles/module/common.module.css';

const Plan = () => {
    return (
        <>
            <div className={aboutStyles.contentAbout}>    
                <section id="plan" className={aboutStyles.sectionBox}>
                    <h2 className={aboutStyles.sectionTitle}>プラン料金表</h2>
                    <p className={aboutStyles.sectionContent}>
                        全てのプランには<span className={commonStyles.bold}>食費・共通の道具代・薪代・運営費</span>が含まれています。交通費とお酒は別になります。
                    </p>
                    <p className={aboutStyles.sectionContent}>
                        また、料金は<span className={commonStyles.bold}>目安で会により変動</span>します。詳しくは<a href="">お問い合わせ</a>ください。
                    </p>
                    <div className={styles.planCardContainer}>
                        <div className={styles.planCardTitle}>焚き火会プラン</div>
                        <div className={styles.planCardBody}>
                            <div className={`${commonStyles.flex} ${commonStyles.mt10} ${commonStyles.mbTo}`}>
                                <div className={styles.planBadge}>日帰り</div>
                                <div className={styles.planPrice}>3,500<span className={styles.planCount}>円 目安/回</span></div>
                            </div>
                            <div className={styles.planDescription}>
                                主に南武線や小田急線沿いで週末の夜、焚火で調理したごはんを食べながらしゃべって火を囲む会です。
                                仕事帰りにも手ぶらで来れます。
                            </div>
                        </div>
                    </div>

                    <div className={styles.planCardContainer}>
                        <div className={styles.planCardTitleW}>秘境でワイルドキャンププラン</div>
                        <div className={styles.planCardBody}>
                            <div className={`${commonStyles.flex} ${commonStyles.mt10} ${commonStyles.mbTo}`}>
                                <div className={styles.planBadgeStay}>宿泊</div>
                                <div className={styles.planPrice}>13,000<span className={styles.planCount}>円 目安/回</span></div>
                            </div>
                            <div className={`${commonStyles.flex} ${commonStyles.mt10} ${commonStyles.mbTo}`}>
                                <div className={styles.planBadge}>日帰り</div>
                                <div className={styles.planPrice}>8,000<span className={styles.planCount}>円 目安/回</span></div>
                            </div>
                            <div className={styles.planDescription}>
                                野営地と呼ばれる場所でキャンプをします。オリエンテーションから火起こしやロープワークなど、日替わりで様々なことが実践で使えるレベルで学べて、夜には火を囲みながらごはんを食べるので、他の参加者とも交流ができ新しい出会いがあるかも。都内なので、アクセス抜群。日帰りも可能です。
                            </div>
                            <div className={styles.planRemarksColumn}>
                                ※宿泊の方はスキルのテストがあり、合格するとスタンプがもらえます。合格した数に応じて割引もあります。
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.otherEventTitle}><span className={commonStyles.bold}>その他イベント</span>(無人島・海外など)</div>
                        <div className={styles.otherEventDescription}>
                            野営や焚火以外にも不定期で様々なことをしています。初心者対象の一般的なキャンプの他、慣れた参加者と国内の無人島で３泊４日の自給自足生活。南米のアマゾンで過ごしたりもしました。
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Plan;
