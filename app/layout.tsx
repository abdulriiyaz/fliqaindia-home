import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Fliqaindia',
    description: `India's Leading Creative Platform`,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="w-screen max-w-full">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
