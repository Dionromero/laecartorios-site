import Image from "next/image";
import { cn } from "@/lib/utils";

interface LaeLogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function LaeLogo({ className, variant = "default" }: LaeLogoProps) {
  const inkClass = variant === "footer" ? "text-lae-ink" : "text-lae-ink";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logolae3.png"
        alt="LAE Cartórios"
        width={56}
        height={64}
        className="h-12 w-auto shrink-0"
        priority
      />
      <div className="flex flex-col leading-none">
        <span className={cn("text-2xl font-bold tracking-tight", inkClass)}>
          LAE
        </span>
        <span className={cn("text-[10px] font-semibold tracking-[0.18em]", inkClass)}>
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