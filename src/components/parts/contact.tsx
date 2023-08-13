import { useState } from 'react';
import { Button } from '@mantine/core'

const Contact = () => {

    return (
        <>
            <section className="">
                <div className="flex flex-col items-center p-4 text-gray-800">
                    <h2 className="text-5xl font-bold">Contact</h2>
                    <div className="mt-4 text-lg leading-relaxed">
                        テキスト<br />
                        テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                        テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                    </div>
                    <Button color="red" radius="xl" size="lg" className="bg-red-500 mt-4">
                        お問い合わせ
                    </Button>
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
            </section>
        </>
    );
}

export default Contact
