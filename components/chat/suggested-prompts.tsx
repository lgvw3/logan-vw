"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { memo } from "react";

interface SuggestedPromptsProps {
  sendMessage: (input: string) => void;
}

function PureSuggestedPrompts({ sendMessage }: SuggestedPromptsProps) {
  const suggestedActions = [
    {
      title: "What is Logan's professional background?",
      label: "Would he be good at engineering our full stack application?",
      action: "What is Logan's professional background? Would he be good at engineering our full stack application?",
    },
    {
      title: "Does Logan have any experience with AI?",
      label: "What AI based projects has he worked on?",
      action: "Does Logan have any experience with AI? What AI based projects has he worked on?",
    },
  ];

  return (
    <div
      data-testid="suggested-actions"
      className="grid sm:grid-cols-2 gap-2 w-full mx-2 pb-2"
    >
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? "hidden sm:block" : "block"}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              sendMessage(suggestedAction.action);
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 w-full h-auto justify-start items-start flex-col text-wrap"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedPrompts = memo(PureSuggestedPrompts, () => true);
