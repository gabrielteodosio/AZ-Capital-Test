import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="grid h-screen place-items-center bg-slate-300">
      <div>
        <h1 className="text-3xl">Welcome to <b>The Store</b></h1>
        <div className="flex flex-row justify-center mt-3">
          <Button className="mr-2">List All</Button>
          <Button className="">New</Button>
        </div>
      </div>
    </main>
  );
}
