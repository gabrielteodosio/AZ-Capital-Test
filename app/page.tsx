"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onNavigateToList = () => {
    router.push("/shirts");
  };

  const onNavigateToNew = () => {
    router.push("/shirts/new");
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-3xl">
          Welcome to <b>The Store</b>
        </h1>
        <div className="flex flex-row justify-center mt-3">
          <Button className="mr-2" onClick={onNavigateToList}>
            Listar anúncios
          </Button>
          <Button className="" onClick={onNavigateToNew}>
            Novo anúncio
          </Button>
        </div>
      </div>
    </main>
  );
}
