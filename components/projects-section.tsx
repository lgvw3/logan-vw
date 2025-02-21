'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { BookMarkedIcon, Brain, Car, DollarSignIcon, DoorOpenIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
  
const projects = [
    {
        title: "Self-Driving Car Simulator",
        description: "Teaching myself more deep learning concepts for autonomous vehicle navigation using simulated computer vision and reinforcement learning.",
        image: "/self-drive.png?height=300&width=400",
        technologies: ["Unity", "Python", "ML Agents", "PyTorch", "C#", "Path Finding"],
        icon: Car,
        featured: true,
        video: '/drive-vid.mov?height=300&width=400',
        link: 'https://github.com/lgvw3/CarGOSPACE',
        details: '/self-driving-car'
    },
    {
        title: "1st Q",
        description: "Agentic workflows for guiding LOs to choosing the best product for their clients and getting them qualifed.",
        image: "/1st-q.png?height=200&width=300",
        technologies: ["OpenAI", "FastAPI", "Nextjs", "MongoDB", "Typescript", "Linear Programming"],
        icon: Brain,
        video: '/1st-q-vid.mov',
        details: '/1st-q'
    },
    {
        title: "Profitability Tool",
        description: "Data pipelines, org trees, and advanced tools for branch profitability management for both branch and company leaders.",
        image: "/profitability-shot.png?height=200&width=300",
        technologies: ["Nextjs", "Typescript", "Python", "MongoDB", "Data Pipelines"],
        icon: DollarSignIcon,
        details: '/profitability-tool'
    },
    {
        title: "Front Door",
        description: "The recruiting and onboarding tool of our organization",
        image: "/front-door.png?height=200&width=300",
        technologies: ["Nextjs", "Typescript", "MongoDB", "Leadership Collaboration"],
        icon: DoorOpenIcon,
        details: '/front-door'
    },
    {
        title: "Family Plates",
        description: "A project for sharing insights and collaborating in real time about Gospel topics",
        image: "/family-plates.png?height=200&width=300",
        video: '/family-plates.mov',
        technologies: ["Nextjs", "Typescript", "MongoDB", "Search Optimization", "Real Time Collaboration"],
        icon: BookMarkedIcon,
        link: 'https://github.com/lgvw3/familyplates',
        details: '/family-plates'
    },
]
  
export default function ProjectsSection() {

    const handleVideoEnd = (target: HTMLVideoElement) => {
        target.currentTime = 0;
        target.play()
    };

    return (
        <section id="projects" className="py-24 bg-muted/50">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
                    Featured Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {
                        projects.map((project) => (
                            <Card key={project.title} className={cn(
                                "transition-all hover:shadow-lg",
                                project.featured && "md:col-span-2 lg:col-span-3"
                            )}>
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <project.icon className="h-5 w-5 text-primary" />
                                        <CardTitle>{project.title}</CardTitle>
                                    </div>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {
                                        project.video ?
                                        <div 
                                            className="aspect-video relative rounded-lg overflow-hidden mb-4 group"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:hidden"
                                            />
                                            <video
                                                src={project.video}
                                                autoPlay
                                                onEnded={(e) => handleVideoEnd(e.currentTarget)} 
                                                muted
                                                className="object-cover hidden group-hover:block"
                                            />
                                        </div>
                                        :
                                        <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    }
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                            ))
                                        }
                                    </div>
                                </CardContent>
                                <CardFooter>
                                {
                                    project.link && (
                                        <a 
                                            className={buttonVariants({variant: 'link'})}
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Repo
                                        </a>
                                    )
                                }
                                <Link 
                                    href={'/projects' + project.details}
                                    className={buttonVariants({variant: 'default'})}
                                >
                                    Details
                                </Link>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
  
  