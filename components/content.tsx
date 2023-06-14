import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import Image from 'next/image';
import img1 from '@/public/img1.png';
import img2 from '@/public/img2.png';
import img3 from '@/public/img3.png';
import img4 from '@/public/img4.png';

function Content() {
    return (
        <>
            <div className="grid grid-cols-4 place-content-center w-full">
                <Card className="flex items-center p-2 w-[488px] border-none">
                    <Image
                        height={142.02}
                        width={127.35}
                        src={img1}
                        alt="Image 1"
                    />
                    <CardHeader>
                        <CardTitle className="whitespace-nowrap font-bold text-2xl overflow-hidden overflow-ellipsis">
                            Verified Reviews
                        </CardTitle>
                        <CardDescription className="text-base ">
                            For verified reviewers
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex items-center p-2 w-[488px] border-none">
                    <Image
                        src={img2}
                        alt="Image 2"
                        height={136.77}
                        width={122.65}
                    />
                    <CardHeader>
                        <CardTitle className="whitespace-nowrap overflow-hidden font-bold text-2xl overflow-ellipsis">
                            Top Articles
                        </CardTitle>
                        <CardDescription className="text-base ">
                            Helps you decide
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex items-center p-2 w-[488px] border-none">
                    <Image
                        src={img3}
                        alt="Image 3"
                        height={131.8}
                        width={118.25}
                    />
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl whitespace-nowrap overflow-hidden overflow-ellipsis">
                            Write Share Win Contest
                        </CardTitle>
                        <CardDescription className="text-base ">
                            Earn cash for reviews
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex items-center p-2 w-[488px] border-none">
                    <Image
                        src={img4}
                        alt="Image 4"
                        height={190.03}
                        width={123.54}
                    />
                    <CardHeader>
                        <CardTitle className="whitespace-nowrap font-bold text-2xl overflow-hidden overflow-ellipsis">
                            MouthShut for Brands
                        </CardTitle>
                        <CardDescription className="text-base ">
                            Request a Demo
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </>
    );
}

export default Content;
