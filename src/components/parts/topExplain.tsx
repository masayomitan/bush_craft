import Image from 'next/image'
import Link from 'next/link';

const TopExplain = () => {
    return (
        <>
            <div className="p-4 text-gray-800">
                <h2 className="text-5xl font-bold relative pb-2">
                    Bushcraft
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-300 transform -skew-x-36"></span>
                </h2>
                <p className="text-1xl mb-2">テキストテキストテキスト</p>
                <div className="mt-4 text-1lg leading-relaxed">
                    テキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                </div>
            </div>


            <div className="p-4 text-gray-800">
                <h2 className="text-5xl font-bold relative pb-2">
                    体験
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-green-300 transform -skew-x-36"></span>
                </h2>
                <p className="text-1xl mb-2">テキストテキストテキスト</p>
                <div className="mt-4 text-1lg leading-relaxed">
                    テキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                </div>
                <p className="text-lg mb-2">テキストテキストテキストテキスト<Link href="https://note.com/your_username"className="text-blue-500 hover:underline">note</Link> に掲載しています。</p>
            </div>

            <div className="p-4">
                {/* 宿泊型スクールのカード */}
                <div className="m-2.5 bg-white rounded-lg shadow-md p-4">
                    {/* 緑のラベル */}
                    <div className="bg-teal-500 text-white rounded-full px-3 py-1 mb-4 text-sm font-semibold">宿泊型アクティブ</div>
                    
                    <h2 className="text-xl font-bold mb-2">1泊</h2>
                    <p className="text-gray-700 text-base mb-4">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    
                    <div className="mb-2">
                        <strong className="text-gray-800">●開催場所</strong> テキストテキストテキストテキスト
                    </div>
                    <div className="mb-2">
                        <strong className="text-gray-800">●移動手段</strong> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                    <div className="mb-2">
                        <strong className="text-gray-800">●参加対象</strong> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                </div>
            </div>

            <div className="p-4">
                {/* 日帰り型スクールのカード */}
                <div className="m-2.5 bg-white rounded-lg shadow-md p-4">
                    {/* darkorangeのラベル */}
                    <div className="bg-orange-700 text-white rounded-full px-3 py-1 mb-4 text-sm font-semibold">日帰り型アクティブ</div>
                    
                    <h2 className="text-xl font-bold mb-2">日帰り</h2>
                    <p className="text-gray-700 text-base mb-4">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    
                    <div className="mb-2">
                        <strong className="text-gray-800">●開催場所</strong> テキストテキストテキストテキスト
                    </div>
                    <div className="mb-2">
                        <strong className="text-gray-800">●移動手段</strong> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                    <div className="mb-2">
                        <strong className="text-gray-800">●参加対象</strong> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
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