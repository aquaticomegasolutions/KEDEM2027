import { useState, type FormEvent } from "react";

import { Button } from "./ActionButton";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 w-full rounded-md border border-input bg-surface/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent";

export type EnquiryKind = string;

/**
 * Minimal participation form — collects only what is needed to respond.
 * Submissions are routed to the official AOS inbox until the summit
 * database (registrations / expo_submissions / contact_enquiries) is live.
 */
export function EnquiryForm({
  pathways,
  defaultPathway,
  className,
  compact = false,
}: {
  pathways: readonly { id: string; title: string }[];
  defaultPathway?: string;
  className?: string;
  compact?: boolean;
}) {
  const [pathway, setPathway] = useState(defaultPathway ?? pathways[0]?.id);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const chosen =
      pathways.find((p) => p.id === pathway)?.title ?? "General enquiry";
    const body = [
      `Interest: ${chosen}`,
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organization: ${data.get("organization") || "—"}`,
      "",
      `${data.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:info@aquaticomega.com?subject=${encodeURIComponent(
      `KEDEM 2027 — ${chosen}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn("surface-panel rounded-xl p-6 sm:p-8", className)}
    >
      <fieldset className="border-0 p-0">
        <legend className="eyebrow mb-4">I am interested in</legend>
        <div className="flex flex-wrap gap-2">
          {pathways.map((p) => (
            <label
              key={p.id}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors",
                pathway === p.id
                  ? "border-accent text-accent"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              <input
                type="radio"
                name="pathway"
                value={p.id}
                checked={pathway === p.id}
                onChange={() => setPathway(p.id)}
                className="sr-only"
              />
              {p.title}
            </label>
          ))}
        </div>
      </fieldset>

      <div className={cn("mt-8 grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Full name
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@example.com" />
        </div>
        <div className={cn(!compact && "sm:col-span-2")}>
          <label htmlFor="organization" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Organization <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input id="organization" name="organization" autoComplete="organization" className={fieldClass} placeholder="Company, startup or institution" />
        </div>
        <div className={cn(!compact && "sm:col-span-2")}>
          <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full rounded-md border border-input bg-surface/60 p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent"
            placeholder="Tell us briefly about your project, startup, proposal or question."
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
        Send enquiry
      </Button>
      <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
        {sent
          ? "Your email client has been opened with your enquiry — send it to reach the AOS team."
          : `Enquiries reach the official AOS team at info@aquaticomega.com.`}
      </p>
    </form>
  );
}
