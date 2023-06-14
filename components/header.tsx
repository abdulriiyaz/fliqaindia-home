import { MainNav } from '@/components/main-nav';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { Button } from './ui/button';

export default function Header() {
    return (
        <header className="flex w-full h-44 items-center justify-between p-5">
            <div className="flex items-center space-x-7">
                <Image
                    src={logo}
                    width={196}
                    className="h-fit w-fit cursor-pointer"
                    height={94}
                    alt="Fliqaindia"
                />
                <MainNav className="h-44" />
            </div>

            <div className="space-x-5 p-3 flex">
                <Button className="rounded-3x w-32 bg-gradient-to-b from-[#4E99A4] to-[#004D58]">
                    Sign up
                </Button>
                <Button className="rounded-3x w-32 bg-gradient-to-b from-[#4E99A4] to-[#004D58]">
                    Sign in
                </Button>
            </div>
        </header>
    );
}
