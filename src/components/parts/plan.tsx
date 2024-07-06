import Image from 'next/image'
import Link from 'next/link';
import '../../styles/about.css';
import '../../styles/staff.css';
import '../../styles/common.css';
import '../../styles/plan.css';

const Plan = () => {
    return (
        <>
            <div className="content-about">    
                <section id="plan" className="section-box">
                    <h2 className="section-title">プラン料金表</h2>
                    <p className="section-content">
                        全てのプランには<span className="bold-text">食費・共通の道具代・薪代・運営費</span>が含まれています。交通費とお酒は別になります。
                    </p>
                    <p className="section-content">
                        また、料金は<span className="bold-text">目安で会により変動</span>します。詳しくは<a href="">お問い合わせ</a>ください。
                    </p>
                    <div className="plan-card-container">
                        <div className="plan-card-title">焚き火会プラン</div>
                        <div className="plan-card-body">
                            <div className="flex mt-10 mb-to">
                                <div className="plan-badge">日帰り</div>
                                <div className="plan-price">3,500<span className="plan-count">円 目安/回</span></div>
                            </div>
                            <div className="plan-description">
                                主に南武線や小田急線沿いで週末の夜、焚火で調理したごはんを食べながらしゃべって火を囲む会です。
                                仕事帰りにも手ぶらで来れます。
                            </div>
                        </div>
                    </div>

                    <div className="plan-card-container">
                        <div className="plan-card-title-w">秘境でワイルドキャンププラン</div>
                        <div className="plan-card-body">
                            <div className="flex mt-10 mb-to">
                                <div className="plan-badge-stay">宿泊</div>
                                <div className="plan-price">13,000<span className="plan-count">円 目安/回</span></div>
                            </div>
                            <div className="flex mt-10 mb-to">
                                <div className="plan-badge">日帰り</div>
                                <div className="plan-price">8,000<span className="plan-count">円 目安/回</span></div>
                            </div>
                            <div className="plan-description">
                                野営地と呼ばれる場所でキャンプをします。オリエンテーションから火起こしやロープワークなど、日替わりで様々なことが実践で使えるレベルで学べて、夜には火を囲みながらごはんを食べるので、他の参加者とも交流ができ新しい出会いがあるかも。都内なので、アクセス抜群。日帰りも可能です。
                            </div>
                            <div className="plan-remarks-column">
                                ※宿泊の方はスキルのテストがあり、合格するとスタンプがもらえます。合格した数に応じて割引もあります。
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="other-event-title"><span className="bold">その他イベント</span>(無人島・海外など)</div>
                        <div className="other-event-description">
                            野営や焚火以外にも不定期で様々なことをしています。初心者対象の一般的なキャンプの他、慣れた参加者と国内の無人島で３泊４日の自給自足生活。南米のアマゾンで過ごしたりもしました。
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}

export default Plan
