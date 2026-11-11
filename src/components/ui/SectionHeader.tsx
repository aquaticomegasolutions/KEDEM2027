import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("px-5 py-20 sm:px-8 lg:py-28", className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
