import { SuggestedPrompts } from "./suggested-prompts";

export default function ChatStarter({ setInput }: { setInput: (input: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-3xl font-semibold mb-4 text-center">See if Logan is a good match for your team</h1>
      <p className="text-center">
        You could look at a PDF, or you can ask for what you need right here.
      </p>
      <div className="w-full">
        <SuggestedPrompts sendMessage={setInput} />
      </div>
    </div>
  );
};


