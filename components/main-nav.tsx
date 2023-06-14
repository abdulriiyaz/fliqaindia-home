import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn(
                'flex items-center space-x-6 lg:space-x-6',
                className
            )}
            {...props}
        >
            <Link
                href="/"
                className="text-sm font-medium transition-colors text-secondary hover:text-primary"
            >
                Home
            </Link>
            <Link
                href="/"
                className="text-sm font-medium transition-colors text-secondary hover:text-primary"
            >
                Service
            </Link>
            <Link
                href="/"
                className="text-sm font-medium transition-colors text-secondary hover:text-primary"
            >
                Portfolio
            </Link>
            <Link
                href="/"
                className="text-sm font-medium transition-colors text-secondary hover:text-primary"
            >
                Community
            </Link>
            <Link
                href="/"
                className="text-sm font-medium transition-colors text-secondary hover:text-primary"
            >
                Blog
            </Link>
        </nav>
    );
}
