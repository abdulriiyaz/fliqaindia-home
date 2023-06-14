import React from 'react';
import { Josefin_Sans, Jura, Jost, Josefin_Slab } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from './ui/separator';

const jsans = Josefin_Sans({ subsets: ['latin'] });
const jslaps = Josefin_Slab({ subsets: ['latin'] });
const jura = Jura({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin'] });

function CTASearch() {
    return (
        <>
            <div className="w-full h-auto pt-4 relative">
                <h1
                    className={`${jura.className} text-6xl text-primary text-center font-bold`}
                >
                    India’s Leading Creative Platform
                </h1>
                <h2
                    className={`${jsans.className} text-3xl font-light text-center text-[#4C696D] p-2 `}
                >
                    Experience hassle-free bookings. Trusted by 2500+ Customers
                </h2>
            </div>
            <Separator className="relative opacity-0" />
            <div className="w-full h-[51px] left-0 bottom-0 mb-6 items-center">
                <Input
                    className={`${jslaps.className} w-[995px] h-[51px] ml-[92px] font-normal absolute left-[366.5px] top-[910.5px] text-2xl rounded-[34px] bg-white/[0.98] border border-black text-center  `}
                    placeholder="Search service, blog and many more…
"
                />
                <Button
                    className={`${jost.className} w-[277px] h-[51px] absolute left-[1084.5px] top-[910.5px] place-content-center text-2xl font-light ml-[92px] rounded-[34px] bg-[#221010] border border-black`}
                    name="Search"
                >
                    Search
                </Button>
            </div>
        </>
    );
}

export default CTASearch;
