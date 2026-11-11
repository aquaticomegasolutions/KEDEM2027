import { cn } from "@/lib/utils";

/**
 * Official QR code — supplied by the organizer, never regenerated.
 * Served from public/qr.png.
 */
const QR_SRC: string | null = "/qr.png";

export function QRBlock({
  size = 160,
  caption = "Scan for contact & social channels",
  className,
  framed = false,
}: {
  size?: number;
  caption?: string | null;
  className?: string;
  /** Premium illuminated frame with a subtle scanning line. */
  framed?: boolean;
}) {
  const img = QR_SRC === null ? (
    <div
      role="img"
      aria-label="Official QR code coming soon"
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center rounded-md bg-white p-1 text-center text-xs font-semibold text-slate-700"
    >
      QR COMING SOON
    </div>
  ) : (
    <img
      src={QR_SRC}
      alt="Official AOS QR code linking to AquaticOmega contact and social channels"
      width={size}
      height={size}
      loading="lazy"
      style={{ width: size, height: size }}
      className="relative rounded-md bg-white p-1"
    />
  );
  return (
    <figure className={cn("flex flex-col items-center gap-4", className)}>
      {framed ? (
        <div className="qr-frame relative rounded-2xl p-5">
          <span aria-hidden="true" className="qr-corner left-2 top-2 border-l-2 border-t-2" />
          <span aria-hidden="true" className="qr-corner right-2 top-2 border-r-2 border-t-2" />
          <span aria-hidden="true" className="qr-corner bottom-2 left-2 border-b-2 border-l-2" />
          <span aria-hidden="true" className="qr-corner bottom-2 right-2 border-b-2 border-r-2" />
          <div className="relative overflow-hidden rounded-md">
            {img}
            <span aria-hidden="true" className="qr-scan" />
          </div>
        </div>
      ) : (
        img
      )}
      {caption ? (
        <figcaption className="max-w-[16rem] text-center text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
