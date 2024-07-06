import '../../styles/about.module.css';
import '../../styles/common.module.css';

const TopExplain = () => {
    return (
        <>
            <div className="content-about">    
                <section id="about">
                    <div className="section-box">
                        <h2 className="section-title">このサークルについて</h2>
                        <p className="section-content">
                            <b>“その辺のものでなんとかする”</b>をテーマに、ブッシュクラフトの技術を使って、リュック一つでできる身軽なキャンプや焚火をする社会人サークルです。
                        </p>
                        <p className="section-content">
                            ただ遊ぶだけではなく、他の参加者とも交流ができ、ブッシュクラフトのスキルが学べることが特徴です。
                        </p>
                        <p className="section-content">
                            自分の気になる会や日程の会う日にご参加ください(‘ω’)
                        </p>
                    </div>
                </section>

                <section  className="section-box-bg">
                    <div className="section-box pb-40">
                        <h2 className="section-title pt-30">Bushcraftとは</h2>
                        <p className="section-content">
                            ブッシュクラフトを簡単に表現すると、<span className="bold-text">少ない荷物でより自然を利用したキャンプスタイル</span>のことです。
                        </p>
                        <p className="section-content">
                            参加していくと、自分で目利きした自然の素材で火起こしができるようになったり、道具を作り出せたり、野宿のスキルを身につけられます。学校や会社では学べない生きる力が身に付き、経験値を大量に稼げます。
                        </p>
                        <p className="section-content">
                            日本でのブッシュクラフトはハードルが高かったりしますが、初心者でも楽しめるように、必要なことをワークショップ形式で学びながら実践できるようにしています。
                        </p>
                        <p className="section-content">
                            ディスカバリーチャンネルが好きな人にはこの上なくピッタリです。潔癖症の方にはあまり向いてないかもしれません。
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default TopExplain
