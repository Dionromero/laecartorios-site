import { cn } from "@/lib/utils";

interface LaeLogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function LaeLogo({ className, variant = "default" }: LaeLogoProps) {
  const inkClass = variant === "footer" ? "text-lae-ink" : "text-lae-ink";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 56 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-12 w-auto shrink-0", inkClass)}
        aria-hidden="true"
      >
        {/* Shield outline — referência heráldica/cartorial */}
        <path
          d="M28 2 L52 10 V32 C52 46 42 56 28 62 C14 56 4 46 4 32 V10 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Coluna jurídica central */}
        <rect x="26" y="18" width="4" height="28" fill="currentColor" />
        <rect x="20" y="16" width="16" height="3" fill="currentColor" />
        <rect x="22" y="46" width="12" height="3" fill="currentColor" />
        {/* Detalhes laterais */}
        <circle cx="14" cy="32" r="2" fill="var(--lae-amber)" />
        <circle cx="42" cy="32" r="2" fill="var(--lae-amber)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "text-2xl font-bold tracking-tight",
            inkClass,
          )}
        >
          LAE
        </span>
        <span
          className={cn("text-[10px] font-semibold tracking-[0.18em]", inkClass)}
        >
          CARTÓRIOS
        </span>
        <span className="mt-0.5 text-[7px] font-medium tracking-[0.15em] text-lae-stone">
          AUTORIDADE CONTÁBIL
          <br />
          PARA O EXTRAJUDICIAL.
        </span>
      </div>
    </div>
  );
}
