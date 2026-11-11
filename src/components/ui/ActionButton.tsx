import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold uppercase tracking-[0.12em] transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-brand text-accent-foreground shadow-glow hover:brightness-110",
        outline:
          "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
        solid: "bg-accent text-accent-foreground hover:brightness-110",
        ghost: "text-muted-foreground hover:text-foreground",
        link: "text-accent underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-[0.7rem]",
        md: "h-11 px-6 text-xs",
        lg: "h-14 px-8 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type BaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
  magnetic?: boolean;
};

function useMagnetic(enabled: boolean) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotionSafe();
  const active = enabled && !reduced;

  return {
    ref,
    handlers: active
      ? {
          onMouseMove: (e: React.MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            const x = (e.clientX - (r.left + r.width / 2)) * 0.18;
            const y = (e.clientY - (r.top + r.height / 2)) * 0.28;
            el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          },
          onMouseLeave: () => {
            const el = ref.current;
            if (el) el.style.transform = "translate3d(0,0,0)";
          },
        }
      : {},
  };
}

export function Button({
  variant,
  size,
  className,
  children,
  magnetic = true,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"button">) {
  const { ref, handlers } = useMagnetic(magnetic);
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cn(buttonVariants({ variant, size }), className)}
      {...handlers}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  magnetic = true,
  to,
  ...props
}: BaseProps & { to: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "to" | "children" | "className"
  >) {
  const { ref, handlers } = useMagnetic(magnetic);
  return (
    <Link
      ref={ref as React.Ref<HTMLAnchorElement>}
      to={to}
      className={cn(buttonVariants({ variant, size }), className)}
      {...handlers}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant,
  size,
  className,
  children,
  magnetic = true,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"a">) {
  const { ref, handlers } = useMagnetic(magnetic);
  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={cn(buttonVariants({ variant, size }), className)}
      {...handlers}
      {...props}
    >
      {children}
    </a>
  );
}
