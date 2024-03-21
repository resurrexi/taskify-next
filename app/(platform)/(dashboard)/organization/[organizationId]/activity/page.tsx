import { Separator } from "@/components/ui/separator"
import { Suspense } from "react"
import { Info } from "../_components/info"
import { ActivityList } from "./_components/activity-list"

export default function ActivityPage() {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  )
}
