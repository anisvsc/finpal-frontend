import Image from "next/image";
import { cn } from "../lib/utils";
import { IndianRupee } from "lucide-react";

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
  return (
    <div className="flex items-center gap-1">
      <div aria-hidden className={cn("border-background bg-linear-to-b rounded-(--radius) relative flex size-8 md:size-9 translate-y-0.5 items-center justify-center border from-green-300 to-blue-600 shadow-lg shadow-black/20 ring-1 ring-black/10", className)}>
        <IndianRupee className="mask-b-from-25% size-5 md:size-6 fill-white stroke-white drop-shadow-sm" />
        <IndianRupee className="absolute inset-0 m-auto size-5 md:size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
      </div>
      <h2 className="font-semibold text-xl md:text-2xl">Finpal</h2>
    </div>
  );
};
