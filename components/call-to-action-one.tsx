import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StatsSection() {
  return (
    <section>
      <div className="py-12 pb-25">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">Smarter Money, One Voice Command Away.</h2>
            <div className="flex justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/dashboard">Try Finpal Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
