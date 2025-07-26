import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, BarChart2, CalendarCheck, Globe, Lock, Mic, Notebook, Play, Plus, Signature, Sparkles, Target } from "lucide-react";

const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4";
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4";
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4";

export default function FeaturesSection() {
  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div>
            <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold">Built to make Finance Effortless</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden p-6">
              <BarChart2 className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">Real-Time Financial Insights</h3>
              <p className="text-muted-foreground mt-3 text-balance">Get instant updates on spending, balances, and personalized tips. Always stay in control, backed by fi.money's mcp intelligence.</p>

              <MeetingIllustration />
            </Card>

            <Card className="group overflow-hidden px-6 pt-6">
              <Mic className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">Voice First Conversations</h3>
              <p className="text-muted-foreground mt-3 text-balance">Chat with your money - ask about budgets, expenses or savings goals with just your voice. no more tapping through menus.</p>

              <CodeReviewIllustration />
            </Card>
            <Card className="group overflow-hidden px-6 pt-6">
              <Lock className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">Secure & Reliable</h3>
              <p className="text-muted-foreground mt-3 text-balance">Built on fi.money's trusted infracture - your data stays safe, your insights stays smart.</p>

              <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
                <AIAssistantIllustration />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const MeetingIllustration = () => {
  return (
    <Card aria-hidden className="mt-9 flex aspect-video flex-col p-4">
      {/* This hidden element is unchanged */}
      <div className="relative hidden h-fit">
        <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">PDF</div>
        <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
      </div>

      {/* --- Header Content --- */}
      <div className="mb-1 text-sm font-semibold">Your Weekly Spending Insights are ready</div>

      {/* --- Mock Data and Bar Chart --- */}
      {(() => {
        const spendingData = [
          { category: "Food", percentage: 75 },
          { category: "Bills", percentage: 50 },
          { category: "Shop", percentage: 90 },
          { category: "Gas", percentage: 40 },
          { category: "Ent.", percentage: 65 },
        ];

        const highestSpending = spendingData.reduce((max, item) => (item.percentage > max.percentage ? item : max));

        return (
          <>
            {/* Chart Visualizer */}
            <div className="flex h-full flex-grow items-end justify-around gap-2">
              {spendingData.map((item) => (
                <div key={item.category} className="group flex flex-col items-center justify-end">
                  <div className="w-6 rounded-t-md bg-blue-500 transition-all duration-300 ease-in-out group-hover:bg-blue-400" style={{ height: `${item.percentage}%` }} title={`${item.category}: ${item.percentage}%`}></div>
                  <div className="mt-1.5 text-[10px] font-medium text-muted-foreground">{item.category}</div>
                </div>
              ))}
            </div>

            {/* Dynamic AI Insight Text */}
            <div className="mt-4 shrink-0 text-sm text-muted-foreground">
              ✨ AI Insight: Your spending on <span className="font-semibold text-foreground">{highestSpending.category}</span> was highest this week.
            </div>
          </>
        );
      })()}
    </Card>
  );
};

const CodeReviewIllustration = () => {
  return (
    <div aria-hidden className="relative mt-6">
      <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
            <img className="aspect-square rounded-full object-cover" src={MESCHAC_AVATAR} alt="M Irung" height="460" width="460" />
          </div>
          <span className="text-muted-foreground text-sm font-medium">Méschac Irung</span>

          <span className="text-muted-foreground/75 text-xs">2m</span>
        </div>

        <div className="ml-8 space-y-2">
          <div className="bg-foreground/10 h-2 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
        </div>

        <Signature className="ml-8 mt-3 size-5" />
      </Card>
      <Card className="aspect-3/3 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
        <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
          <Mic className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
        </div>
      </Card>
    </div>
  );
};

const AIAssistantIllustration = () => {
  return (
    <Card aria-hidden className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0">
      <div className="w-fit">
        <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
        <p className="mt-2 line-clamp-2 text-sm">How can I optimize my neural network to reduce inference time while maintaining accuracy?</p>
      </div>
      <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
        <div className="text-muted-foreground text-sm">Ask AI Assistant</div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="size-7 rounded-2xl bg-transparent shadow-none">
              <Plus />
            </Button>
            <Button variant="outline" size="icon" className="size-7 rounded-2xl bg-transparent shadow-none">
              <Globe />
            </Button>
          </div>

          <Button size="icon" className="size-7 rounded-2xl bg-black">
            <ArrowUp strokeWidth={3} />
          </Button>
        </div>
      </div>
    </Card>
  );
};
