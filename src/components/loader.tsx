import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLoader() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex content-between align-middle">
        <Skeleton className="h-[24px] w-[200px] rounded-xl" />
        <Skeleton className="h-[24px] w-[24px] rounded-xl ml-auto" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  )
}