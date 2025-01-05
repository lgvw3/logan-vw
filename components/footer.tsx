import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-6 border-t">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Logan Van Wagoner
                    </div>
                    <nav className="flex gap-4 text-sm">
                        <Link href="#top" className="text-muted-foreground hover:text-foreground">
                            Home
                        </Link>
                        <Link href="#projects" className="text-muted-foreground hover:text-foreground">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

