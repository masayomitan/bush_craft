import { useState } from 'react';

const About = () => {

    return (
        <>
            <section className="">
                <div className="container mx-auto mt-10 p-4">
                    <h2 className="text-5xl font-bold relative pb-2">
                        About us
                        <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 transform -skew-x-36"></span>
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
            </section>
        </>
    );
}

export default About