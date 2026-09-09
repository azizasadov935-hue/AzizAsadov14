import { useState } from "react";
import { cn } from "../../utils/cn";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  mono?: boolean;
  label?: string;
  priority?: boolean;
}

/**
 * Rasm yuklanmasa (fayl hali joylanmagan bo'lsa) — nafis monoxrom placeholder
 * ko'rsatadi va qaysi faylni qo'yish kerakligini yozadi.
 */
export function SmartImage({ src, alt, className, imgClassName, mono = true, label, priority }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const file = src.split("/").pop();

  return (
    <div className={cn("relative overflow-hidden bg-surface-2", className)}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-1000",
            mono && "mono-img",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName,
          )}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 14px)",
            }}
          />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-line">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="4" width="18" height="16" rx="1" />
              <circle cx="9" cy="10" r="2" />
              <path d="M21 16l-5-5-8 8" />
            </svg>
          </div>
          <div className="relative">
            {label && <p className="eyebrow mb-2">{label}</p>}
            <p className="font-mono text-[11px] tracking-wider text-muted">public/images/{file}</p>
          </div>
        </div>
      )}
    </div>
  );
}
