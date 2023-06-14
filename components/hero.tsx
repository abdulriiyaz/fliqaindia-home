import React from 'react';
import hero from '@/public/hero.png';
import Image from 'next/image';

function Hero() {
    return (
        <div className="w-full">
            <Image src={hero} alt="hero" className="w-screen" />
        </div>
    );
}

export default Hero;
