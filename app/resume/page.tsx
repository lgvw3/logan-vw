'use client'

import { useAssistant } from 'ai/react'
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function Page() {
    const { messages, input, handleInputChange, submitMessage, status } = useAssistant({
        api: '/api'
    })

  const isLoading = status !== 'awaiting_message'

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-2">
                <div className="w-12 h-6 flex items-center justify-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Status indicator */}
        <div className="px-4 py-2 text-sm text-muted-foreground">
          Status: {status.replace(/_/g, ' ')}
        </div>

        {/* Input area */}
        <div className="p-4 border-t">
          <form onSubmit={submitMessage} className="flex space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Why look at another PDF when you can ask for what you need right here?"
              className="flex-1"
              disabled={isLoading}
              autoFocus
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}

