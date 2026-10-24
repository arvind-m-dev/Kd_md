import type { Metadata } from "next";
import { Suspense } from "react";
import { AskChat } from "@/components/ask/ask-chat";
import { SUGGESTED_QUESTIONS } from "@/lib/suggestions";

export const metadata: Metadata = { title: "Ask" };

export default function AskPage() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] flex-col">
      <Suspense>
        <AskChat suggestions={SUGGESTED_QUESTIONS} />
      </Suspense>
    </div>
  );
}
