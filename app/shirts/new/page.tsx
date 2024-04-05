import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { revalidateTag } from "next/cache";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";

interface NewShirtPropsType {
  isComponent: boolean
}

export default function NewShirt(props: NewShirtPropsType) {
  async function handleFormSubmit(form: FormData) {
    "use server";

    const name = form.get("name");
    const price = form.get("price");
    const size = form.get("size");
    const color = form.get("color");

    const data = {
      name,
      price,
      size,
      color,
    };

    await fetch("http://localhost:3031/shirts", {
      method: "POST",
      body: JSON.stringify(data),
    });

    revalidateTag("get-shirts");
    redirect("/shirts");
  }

  return (
    <form action={handleFormSubmit} method="POST">
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" />
      </div>
      <div className="mt-2">
        <Label htmlFor="size">Tamanho</Label>
        <Select name="size">
          <SelectTrigger id="size">
            <SelectValue placeholder="Selecione o tamanho" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="pp">PP</SelectItem>
              <SelectItem value="p">P</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="G">G</SelectItem>
              <SelectItem value="GG">GG</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-2">
        <Label htmlFor="price">Preço</Label>
        <Input id="price" name="price" type="number" />
      </div>
      <div className="mt-2">
        <Label htmlFor="color">Cor</Label>
        <Input id="color" name="color" />
      </div>
      <DialogFooter className="mt-2 bg-red">
        <DialogClose asChild>
          <Button className="mr-2" type="button" variant="outline">
            {props.isComponent ? 'Cancelar' : 'Limpar'}
          </Button>
        </DialogClose>
        <Button type="submit">Salvar</Button>
      </DialogFooter>
    </form>
  );
}
