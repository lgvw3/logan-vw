import Chat from "@/components/chat/chat";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const title = 'Logan\'s Resume';

    // Create a rich description
    const description = 'Logan\'s resume.';

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';  // Fallback for local testing

    const metadata = {
        metadataBase: new URL(baseUrl),  // Ensure absolute URLs
        title,
        description,
    };

    //console.log(metadata);
    return metadata;
}

export default function Page() {
  return <Chat />;
}
