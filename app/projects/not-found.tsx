import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Project Not Found</h1>
      <p className="text-lg text-muted-foreground">
        The project you are looking for does not exist or has been removed.
      </p>
      <Button asChild>
        <Link href="/#projects">Back to Projects</Link>
      </Button>
    </div>
  )
}

