'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
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
                    <Link href="#top" className="text-xl font-bold hover:text-primary">
                        Logan Van Wagoner
                    </Link>
                <nav className="flex gap-6">
                    <Button variant="ghost" asChild>
                        <Link href="#top">Home</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="#projects">Projects</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="#contact">Contact</Link>
                    </Button>
                </nav>
                </div>
            </div>
        </header>
    )
}
