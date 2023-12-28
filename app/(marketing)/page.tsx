import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          GeistSans.className,
        )}
      >
        <div className="flex items-center rounded-full border bg-amber-100 p-4 uppercase text-amber-700 shadow-sm">
          <Medal className="mr-2 h-6 w-6" />
          No 1 task management
        </div>
        <h1 className="mt-8 text-center text-3xl text-neutral-800 md:mt-10 md:text-6xl">
          Taskify helps teams
        </h1>
        <div className="mt-3 w-fit rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 text-3xl text-white md:mt-6 md:text-6xl">
          move forward
        </div>
      </div>
      <div
        className={cn(
          "mx-auto mt-8 max-w-xs text-center text-sm text-neutral-400 md:mt-12 md:max-w-2xl md:text-xl",
          poppinsFont.className,
        )}
      >
        Collaborate, manage projects, and reach new productivity levels. From
        high rises to the home office, the way your team works is unique &ndash;
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6 md:mt-8" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
}
