import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BadgeIndianRupee, BookOpen, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="py-20 pt-28">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative text-center">
          <MistKitLogo className="mx-auto" />
          <h1 className="mx-auto mt-8 max-w-xl text-balance text-3xl md:text-5xl font-medium">Your Finance Buddy</h1>

          <p className="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-xl">Take control of your money - just by speaking.</p>

          <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
            <Button asChild variant="default">
              <Link href="/dashboard">
                <span className="text-nowrap">Try Finpal Now</span>
              </Link>
            </Button>
            {/* <Button asChild variant="ghost">
              <Link href="#link">
                <span className="text-nowrap">View Demo</span>
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
          <div className="absolute inset-0 size-full object-cover bg-linear-to-b  from-green-300 to-blue-600" />

          <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
            <Image src="/hero-image.png" alt="app screen" width="1920" height="1880" className="object-top-left size-full object-cover" />
          </div>
        </div>

        {/* <div className="mt-8 flex flex-wrap items-center gap-4">
          <p className="text-muted-foreground text-center">Built with :</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex">
              <img className="mx-auto h-4 w-fit" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
            </div>

            <div className="flex">
              <img className="mx-auto h-3 w-fit" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto" />
            </div>
            <div className="flex">
              <img className="mx-auto h-3 w-fit" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
            </div>
            <div className="flex">
              <img className="mx-auto h-4 w-fit" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

const MistKitLogo = ({ className }: { className?: string }) => (
  <div aria-hidden className={cn("border-background bg-linear-to-b rounded-(--radius) relative flex size-18 translate-y-0.5 items-center justify-center border from-green-300 to-blue-600 shadow-lg shadow-black/20 ring-1 ring-black/10", className)}>
    <IndianRupee className="mask-b-from-25% size-12 fill-white stroke-white drop-shadow-sm" />
    <IndianRupee className="absolute inset-0 m-auto size-12 fill-white stroke-white opacity-65 drop-shadow-sm" />
  </div>
);
