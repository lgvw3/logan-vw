'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-200",
            isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
        )}>
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link 
                        href={pathname == '/' ? '#top' : '/'} 
                        className="text-lg md:text-xl font-bold hover:text-primary"
                    >
                        Logan <span className="text-nowrap">Van Wagoner</span>
                    </Link>
                    <Separator orientation="vertical" className="ml-2 md:hidden" />
                    {
                        pathname == '/' ?
                        <nav className="flex">
                            <Button variant="ghost" asChild>
                                <Link 
                                    href={pathname.startsWith('/projects') ? '/' : "/#projects"} 
                                >Projects</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link 
                                    href={pathname.startsWith('/projects') ? '/' : "/#contact"} 
                                >Contact</Link>
                            </Button>
                        </nav>
                        : null
                    }
                </div>
            </div>
        </header>
    )
}

