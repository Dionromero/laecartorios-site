import Image from "next/image";
import { cn } from "@/lib/utils";

interface LaeLogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function LaeLogo({ className, variant = "default" }: LaeLogoProps) {
  const isFooter = variant === "footer";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/imagem/logolae3.png"
        alt="LAE Cartórios"
        width={72}
        height={84}
        className={cn("w-auto shrink-0", isFooter ? "h-12" : "h-20")}
        priority
      />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-tight text-lae-ink",
            isFooter ? "text-2xl" : "text-4xl",
          )}
        >
          LAE
        </span>
        <span
          className={cn(
            "font-semibold tracking-[0.18em] text-lae-ink",
            isFooter ? "mt-0.5 text-[10px]" : "mt-1 text-sm",
          )}
        >
          CARTÓRIOS
        </span>
        <span
          className={cn(
            "font-medium tracking-[0.15em] text-lae-stone",
            isFooter ? "mt-0.5 text-[7px]" : "mt-1 text-[9px]",
          )}
        >
          AUTORIDADE CONTÁBIL
          <br />
          PARA O EXTRAJUDICIAL.
        </span>
      </div>
    </div>
  );
}