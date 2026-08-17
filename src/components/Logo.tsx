/**
 * Textová značka PMP služby.
 * Až bude dodáno obrázkové logo, stačí nahradit obsah této komponenty.
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const main = variant === "light" ? "text-primary-foreground" : "text-primary";
  const sub = variant === "light" ? "text-primary-foreground/80" : "text-muted-foreground";

  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span className={`font-display text-2xl leading-none font-extrabold tracking-tight sm:text-3xl ${main}`}>
        PMP
      </span>
      <span className={`text-base leading-none font-light tracking-wide sm:text-lg ${sub}`}>
        služby
      </span>
    </span>
  );
}
