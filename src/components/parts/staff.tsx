import Image from 'next/image'
import Link from 'next/link';
import '../../styles/about.css';
import '../../styles/staff.css';
import '../../styles/common.css';

const Staff = () => {
    return (
        <>
            <div className="content-about">    
                <section id="staff" className="section-box">
                    <h2 className="section-title">スタッフ紹介</h2>
                    <div className="staff-card-container flex">
                        <div className="staff-image-box">
                            test
                        </div>
                        <div className="staff-card">
                            <div className="fs-18 bold">主催</div>
                            <div className="fs-10 ml-40">Shinya Kazuhiko</div>
                            <div className="fs-26 mt-5">新谷 和彦</div>
                            <div className="fs-18">
                                <p className="bold">ニックネーム</p>
                                <p className="">ピコさん</p>
                            </div>
                        </div>
                    </div>
                    <div className="fs-20 staff-message">
                        <p className="bold">メッセージ</p>
                        社会人ブッシュクラフトサークルという形で、参加者とキャンプをしながら火起こしや自然に目を向けることの楽しさを伝えています。普通のキャンプに比べ、少しハードルが高く感じがちですが、初心者でもできるようにきちんとレベルを合わせて内容を組んでいます。是非遊びに来てね(‘ω’)
                    </div>
                    <div className="ta-r">
                        <a href="#" className="view-more">view more</a>
                    </div>
                </section>

                <section className="section-box-bg">
                    <div className="section-box pb-40">
                        <div className="staff-card-container flex pt-40">
                            <div className="staff-image-box">
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
                                <div className="fs-18 bold">助手</div>
                                <div className="fs-10 ml-40">Ozawa Mariko</div>
                                <div className="fs-26 mt-5">小澤 麻理子</div>
                                <div className="fs-18">
                                    <p className="bold">ニックネーム</p>
                                    <p className="">まりこさん</p>
                                </div>
                            </div>
                        </div>
                        <div className="fs-20 staff-message">
                            <p className="bold">メッセージ</p>
                            主催の技術補助のほか、料理を担当。
                            簡単でおいしく、お腹いっぱい！がモットー。
                            キャンプ料理と家庭料理の良さを交ぜながら、毎回参加しても飽きないご飯を提供しています。
                            ブッシュクラフトを食の面からも楽しんでくださいね！
                            虫や、お悩み相談も得意です。
                        </div>
                        <div className="ta-r">
                            <a href="#" className="view-more">view more</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Staff
