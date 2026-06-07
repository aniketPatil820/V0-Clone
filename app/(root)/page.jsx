import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button>Test</Button>
      <UserButton />
    </div>
  )
}
