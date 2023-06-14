import Header from '@/components/header';
import Hero from '@/components/hero';
import Content from '@/components/content';
import CTASearch from '@/components/cta-search';

export default function Home() {
    return (
        <main className="flex flex-col h-full w-full">
            <div className="flex bg-[#131514]">
                <Header />
            </div>
            <div className="">
                <Hero />
                <CTASearch />
                <Content />
            </div>
            <div className="flex items-center w-full h-full justify-center m-7">
                <svg
                    width={1464}
                    height={2}
                    viewBox="0 0 1464 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        d="M1 0.5H0.5V1.5H1V0.5ZM1463 1.5C1463.28 1.5 1463.5 1.27614 1463.5 1C1463.5 0.723858 1463.28 0.5 1463 0.5V1.5ZM1 1.5H1463V0.5H1V1.5Z"
                        fill="black"
                    />
                </svg>
            </div>
        </main>
    );
}
