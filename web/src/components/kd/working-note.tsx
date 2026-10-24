// Wraps a page that is a working note (lib/scope.ts). With working notes hidden it shows a short notice
// instead of the content; with them shown, the content. Pure CSS (globals.css), so it works on static pages.
import { EyeOff } from "lucide-react";
import { ShowAllButton } from "@/components/shell/scope-toggle";

export function WorkingNote({ what = "page", children }: { what?: string; children: React.ReactNode }) {
  return (
    <>
      <div data-core-only className="mx-auto my-10 max-w-lg rounded-2xl border border-dashed p-8 text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-accent text-primary">
          <EyeOff className="size-6" />
        </div>
        <h2 className="mt-4 font-semibold">This {what} is a working note</h2>
        <p className="mx-auto mt-1 text-sm text-pretty text-muted-foreground">
          Discussions, meeting notes, backlog, Phase 2 and open questions are hidden, so you see the main business rules,
          logic and requirements. Turn on working notes to see it.
        </p>
        <div className="mt-4">
          <ShowAllButton />
        </div>
      </div>
      <div data-extra>{children}</div>
    </>
  );
}
