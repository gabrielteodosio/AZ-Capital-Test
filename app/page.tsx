'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const onNavigateToList = () => {
    router.push('/shirts')
  }

  const onNavigateToNew = () => {
    router.push('/shirts/new')
  }

  return (
    <main className="grid h-screen place-items-center bg-slate-300">
      <div>
        <h1 className="text-3xl">Welcome to <b>The Store</b></h1>
        <div className="flex flex-row justify-center mt-3">
          <Button className="mr-2" onClick={onNavigateToList}>
            List All
          </Button>
          <Button className="" onClick={onNavigateToNew}>
            New
          </Button>
        </div>
      </div>
    </main>
  );
}
