import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useMantineTheme, Portal, ScrollArea, Modal } from '@mantine/core';

import Image from 'next/image'

const Program = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme()

    const getContent = (modalType: string | null) => {
        switch (modalType) {
            case 'fire':
                return Array(100).fill(0).map((_, index) => <p key={index}>ファイアーファイアーファイアー</p>)
            case 'camp':
                return Array(100).fill(0).map((_, index) => <p key={index}>キャンプキャンプキャンプ</p>)
            case 'knife':
                return Array(100).fill(0).map((_, index) => <p key={index}>ナイフナイフナイフ</p>)
            default:
                return []
        }
    }

    const content = getContent(activeModal);
    
    const openModal = (type: string) => {
        setActiveModal(type)
        open()
    }
    
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-5xl font-medium title-font text-gray-900 mb-4">Program</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">テストコメントテストコメントテストコメントテストコメントテストコメント</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 relative">
                            <Image
                                key={"/images/fire.png"}
                                src={"/images/fire.png"}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
                            />
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Fire activity</h2>
                        <p className="leading-relaxed text-base">テストコメントテストコメントテストコメントテストコメントテストコメント</p>
                        <button className="mt-3 text-indigo-500 inline-flex items-center" onClick={() => openModal('fire')}>
                            Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 relative">
                            <Image
                                key={"/images/camp.png"}
                                src={"/images/camp.png"}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
                            />
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shelter activity</h2>
                        <p className="leading-relaxed text-base">テストコメントテストコメントテストコメントテストコメントテストコメントテストコメントテストコメントテストコメントテストコメントテストコメント</p>
                        <button className="mt-3 text-indigo-500 inline-flex items-center" onClick={() => openModal('camp')}>
                            Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 relative">
                            <Image
                                key={"/images/knife.png"}
                                src={"/images/knife.png"}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
                            />
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Knife activity</h2>
                        <p className="leading-relaxed text-base">テストコメントテストコメントテストコメントテストコメントテストコメントテストコメントテストコメントテストコメントテストコメントテストコメント</p>
                        <button className="mt-3 text-indigo-500 inline-flex items-center" onClick={() => openModal('knife')}>
                            Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>                  
                    <Portal>
                        <Modal
                            opened={opened}
                            onClose={close}
                            scrollAreaComponent={ScrollArea.Autosize}
                            transitionProps={{ 
                                transition: 'scale',
                                duration: 600
                            }}
                            title={
                                activeModal === 'fire' ? 'ファイアーファイアーファイアー' 
                                : activeModal === 'camp' ? 'キャンプキャンプキャンプ' 
                                : 'ナイフナイフ'}
                        >
                            {content}
                        </Modal>
                    </Portal>
            </section>
        </>
    );
}

export default Program
