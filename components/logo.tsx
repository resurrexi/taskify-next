import { cn } from "@/lib/utils"
import { GeistSans } from "geist/font/sans"
import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" width={30} height={30} alt="logo" />
        <p className={cn("text-lg text-neutral-700", GeistSans.className)}>
          Taskify
        </p>
      </div>
    </Link>
  )
}
