import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center rounded-full border bg-amber-100 p-4 uppercase text-amber-700 shadow-sm">
          <Medal className="mr-2 h-6 w-6" />
          No 1 task management
        </div>
        <h1 className="mt-10 text-center text-3xl text-neutral-800 md:text-6xl">
          Taskify helps teams
        </h1>
        <div className="mt-6 w-fit rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 text-3xl text-white md:text-6xl">
          move forward
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl">
        Collaborate, manage projects, and reach new productivity levels. From
        high rises to the home office, the way your team works is unique &ndash;
        accomplish it all with Taskify.
      </div>
      <Button className="mt-8" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
}
