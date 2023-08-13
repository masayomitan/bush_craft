import { useState } from 'react';
import Image from 'next/image';
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const Profile = () => {
    const charactersList = [
        {
            id: 'bender',
            image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
            label_image: '/images/fire.png',
            label: 'テストネーム1',
            description: '代表代表代表代表代表',
            content: "自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介",
        },
    
        {
            id: 'carol',
            image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
            label_image: '/images/fire.png',
            label: 'テストネーム2',
            description: '助手助手助手助手助手助手助手助手助手助手助手助手',
            content: "自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介",
        },
    
        {
            id: 'homer',
            image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
            label_image: '/images/fire.png',
            label: 'テストネーム3',
            description: '助手助手助手助手助手助手助手助手助手',
            content: "自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介",
        },
    ]

    interface AccordionLabelProps {
        label: string;
        image: string;
        description: string;
    }
    const AccordionLabel = ({ label, image, description }: AccordionLabelProps) => {
        return (
            <Group noWrap>
                <Avatar src={image} radius="xl" size="lg" />
                <div>
                    <Text>{label}</Text>
                    <Text size="sm" color="dimmed" weight={400}>
                        {description}
                    </Text>
                </div>
            </Group>
        )
    }
    return (
        <section>
            <div className="container mx-auto mt-10 p-4">
                <Accordion chevronPosition="right" variant="contained">
                    {charactersList.map((item) => (
                        <Accordion.Item 
                            value={item.id}
                            key={item.label}
                            className="mb-2"
                        >
                            <div className="flex justify-center items-center border p-4 h-64">
                                <Image 
                                    src={item.label_image}
                                    alt="Profile Image" 
                                    width={96} 
                                    height={96} 
                                    className="rounded-full"
                                />
                            </div>
                            <Accordion.Control className="active:scale-95">
                                <AccordionLabel {...item} />
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text size="sm">{item.content}</Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default Profile