import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // base
  "group/button relative isolate inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl text-sm font-semibold tracking-tight transition-all duration-300 ease-out outline-none select-none focus-visible:ring-2 focus-visible:ring-lae-amber/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Dourado — CTA principal. Gradiente sutil + brilho varre + elevação.
        default:
          "bg-gradient-to-b from-lae-amber to-lae-gold text-lae-ink shadow-[0_2px_12px_-2px_rgba(248,196,79,0.5)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(248,196,79,0.6)] hover:brightness-[1.03] before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full",
        // Grafite — CTA escuro. Elevação + brilho sutil.
        ink: "bg-gradient-to-b from-lae-ink to-[#0f1010] text-white shadow-[0_2px_12px_-2px_rgba(22,24,24,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(22,24,24,0.5)] before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-lae-amber/25 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full",
        // Contorno — secundário elegante, fundo dourado sutil cresce
        outline:
          "border border-lae-ink/15 bg-transparent text-lae-ink shadow-sm hover:-translate-y-0.5 hover:border-lae-amber/60 hover:bg-lae-amber/10 hover:shadow-[0_6px_18px_-6px_rgba(248,196,79,0.4)]",
        // Contorno dourado — secundário sobre fundo claro
        gold: "border border-lae-amber-deep/40 bg-transparent text-lae-amber-deep shadow-sm hover:-translate-y-0.5 hover:border-lae-amber-deep hover:bg-lae-amber/10 hover:shadow-[0_6px_18px_-6px_rgba(248,196,79,0.4)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-secondary/70",
        ghost:
          "text-lae-ink hover:bg-lae-amber/10 hover:text-lae-amber-deep",
        link: "text-lae-amber-deep underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-slot="button"
        data-variant={variant ?? "default"}
        data-size={size ?? "default"}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-300 group-hover/button:[&_svg:last-child]:translate-x-0.5">
            {children}
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };