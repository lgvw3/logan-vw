'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'
import { Label } from "./ui/label"
import Image from "next/image"
import sendMessage from "@/lib/actions"
import { toast } from "sonner"
import { useActionState, useState } from "react"

export default function ContactSection() {

    const initialState = { message: '', errors: {} };
    const [state, dispatch] = useActionState(sendMessage, initialState);
    const [name, setName] = useState<string | undefined>()
    const [email, setEmail] = useState<string | undefined>()
    const [message, setMessage] = useState<string | undefined>()

    if (state.message != '') {
        if (state.message == 'Success') {
            toast.success('Message to Logan sent! Thank you!')
        }
        else {
            toast.warning('Failed to send message.')
        }
        state.message = ''
    }

    return (
        <section id="contact" className="py-24">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
                    Get in Touch
                </h2>
                <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                        <div className="flex gap-4 mb-8">
                            <a
                                href="https://github.com/lgvw3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-muted hover:bg-muted/80"
                            >
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="https://x.com/lgvw3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-muted hover:bg-muted/80"
                            >
                                <Image className="h-6 w-6" src={'/x.svg'} width={6} height={6} alt='X Logo' />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/logan-van-wagoner/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-muted hover:bg-muted/80"
                            >
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:logangvw3@gmail.com"
                                className="p-2 rounded-full bg-muted hover:bg-muted/80"
                            >
                                <Mail className="h-6 w-6" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <form 
                            action={dispatch}
                            className="space-y-6">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your name" 
                                    defaultValue={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div id="name-error" aria-live="polite" aria-atomic="true">
                                    {state.errors?.name &&
                                    state.errors.name.map((error: string) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    id='email' 
                                    name='email' 
                                    placeholder="your@email.com" 
                                    type="email"
                                    defaultValue={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div id="email-error" aria-live="polite" aria-atomic="true">
                                    {state.errors?.email &&
                                    state.errors.email.map((error: string) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Your message"
                                    className="min-h-[120px]"
                                    name="message"
                                    defaultValue={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <div id="message-error" aria-live="polite" aria-atomic="true">
                                    {state.errors?.message &&
                                    (
                                        <p className="mt-2 text-sm text-red-500">
                                            Please include a message
                                        </p>
                                    )}
                                </div>
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

