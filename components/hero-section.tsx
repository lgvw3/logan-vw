import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section id="top" className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
            <div className="container px-4 py-32 mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                    Hi, I&apos;m {" "}
                    <TooltipProvider delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger>
                                <span 
                                    className="text-nowrap underline"
                                >
                                        Logan Van Wagoner
                                    </span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <Image 
                                    src='/me.png' 
                                    alt="A picture of Logan. Wow he is handsome"
                                    width={300}
                                    height={400}
                                />
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>, a full-stack engineer building{" "}
                    <span className="text-primary">AI/ML systems</span> to solve real-world problems.
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Specializing in machine learning, deep learning, and full-stack development
                </p>
                <div className="flex gap-4 justify-center">
                    <Button size="lg" asChild>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            View Resume
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#projects">
                            Explore Projects
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

