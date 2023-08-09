import Image from 'next/image'
import Link from 'next/link';

const TopExplain = () => {
    return (
        <>
            <div className="p-4 text-gray-800">
                <h2 className="text-5xl font-bold">Bushcraft</h2>
                <div className="mt-4 text-lg leading-relaxed">
                    テキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                </div>
            </div>


            <div className="p-4 text-gray-800">
                <h2 className="text-5xl font-bold mb-4">体験</h2>
                <p className="text-xl mb-2">テキストテキストテキスト</p>
                <p className="text-xl mb-2">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <p className="text-lg mb-2">テキストテキストテキストテキスト<Link href="https://note.com/your_username"className="text-blue-500 hover:underline">note</Link> に掲載しています。</p>
            </div>

            <div className="p-4">
                {/* 宿泊型スクールのカード */}
                <div className="m-2.5 bg-white rounded-lg shadow-md p-4">
                    {/* 緑のラベル */}
                    <div className="bg-teal-500 text-white rounded-full px-3 py-1 mb-4 text-sm font-semibold">宿泊型スクール</div>
                    
                    <h2 className="text-xl font-bold mb-2">宿泊型スクール</h2>
                    <p className="text-gray-700 text-base mb-4">宿泊型スクールは、実践的なブッシュクラフト体験を通じて、ひとりひとりが主体となりブッシュクラフトの総合的な技術・知識を学ぶプログラムとなります。個々の力を伸ばすことで、自ら生き抜く力を身につけ問題を解決する力を養うことを目標としています。</p>
                    
                    <div className="mb-2">
                    <strong className="text-gray-800">●開催場所</strong> 関東近郊
                    </div>
                    <div className="mb-2">
                    <strong className="text-gray-800">●移動手段</strong> 貸切バス、公共交通機関の利用及び現地集合・解散などスクールの形態により異なります。
                    </div>
                    <div className="mb-2">
                    <strong className="text-gray-800">●参加対象</strong> 小学3年生～中学生となります。
                    </div>
                </div>
            </div>

            <div className="p-4">
                {/* 日帰り型スクールのカード */}
                <div className="m-2.5 bg-white rounded-lg shadow-md p-4">
                    {/* darkorangeのラベル */}
                    <div className="bg-orange-700 text-white rounded-full px-3 py-1 mb-4 text-sm font-semibold">日帰り型スクール</div>
                    
                    <h2 className="text-xl font-bold mb-2">日帰り型スクール</h2>
                    <p className="text-gray-700 text-base mb-4">日帰り型スクールは、基本的なブッシュクラフトの技術・知識を学ぶプログラムとなります。その他、親子でご参加いただけるファミリーイベントも開催しています。</p>
                    
                    <div className="mb-2">
                    <strong className="text-gray-800">●開催場所</strong> 関東近郊
                    </div>
                    <div className="mb-2">
                    <strong className="text-gray-800">●移動手段</strong> 現地集合・解散、または貸切バス、公共交通機関の利用などスクールの形態により異なります。
                    </div>
                    <div className="mb-2">
                    <strong className="text-gray-800">●参加対象</strong> スクール毎に異なります。
                    </div>
                </div>
            </div>
            <p>紹介画像いろいろ</p>
            <div className="relative flex flex-row justify-between items-start flex-wrap p-4">
                <div className="w-1/2 p-2 bg-outer-color">
                    <div className="h-64 bg-blue-500 rounded-md">
                        {/* 画像が用意できたら以下のコメントを外してください */}
                        {/*
                        <Image
                        src="/path/to/image1.jpg"
                        alt="Image 1"
                        className="rounded-md"
                        />
                        */}
                    </div>
                </div>
                <div className="w-1/2 p-2 bg-outer-color">
                    <div className="h-64 bg-blue-500 rounded-md">
                        {/* 画像が用意できたら以下のコメントを外してください */}
                        {/*
                        <Image
                        src="/path/to/image1.jpg"
                        alt="Image 1"
                        className="rounded-md"
                        />
                        */}
                    </div>
                </div>
                <div className="w-1/2 p-2 bg-outer-color">
                    <div className="h-64 bg-blue-500 rounded-md">
                        {/* 画像が用意できたら以下のコメントを外してください */}
                        {/*
                        <Image
                        src="/path/to/image1.jpg"
                        alt="Image 1"
                        className="rounded-md"
                        />
                        */}
                    </div>
                </div>
                <div className="w-1/2 p-2 bg-outer-color">
                    <div className="h-64 bg-blue-500 rounded-md">
                        {/* 画像が用意できたら以下のコメントを外してください */}
                        {/*
                        <Image
                        src="/path/to/image1.jpg"
                        alt="Image 1"
                        className="rounded-md"
                        />
                        */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopExplain