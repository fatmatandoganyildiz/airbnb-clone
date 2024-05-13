import { cn } from "@/lib/utils"

  //evleri filter ederken evlerin yuklenmesi uzun surdugunde bu gosterilecek
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
