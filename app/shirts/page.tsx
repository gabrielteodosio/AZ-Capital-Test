import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Search, PlusCircle } from 'lucide-react'
import NewShirt from "./new/page";

type Shirt = {
  id?: string | number;
  image_url?: string;
  name: string;
  price: number;
  size?: string;
  color?: string;
};

export default async function Shirts() {
  const response = await fetch("http://localhost:3031/shirts", {
    next: {
      tags: ["get-shirts"],
    },
  });
  const data: Shirt[] = await response.json();

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <form className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-between gap-2">
            <Input autoFocus name="name" placeholder="Nome do anúncio" />
            <Input name="price" placeholder="Preço da camisa" />
            <Input name="color" placeholder="Cor da camisa" />
            <Input name="size" placeholder="Tamanho da camisa" />
          </div>

          <div className="flex flex-row gap-2">
            <Button type="submit" variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Filtrar resultados
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button type="button">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Novo anúncio
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Novo Produto</DialogTitle>
                  <DialogDescription>Criar um novo produto</DialogDescription>
                </DialogHeader>

                <div>
                  <NewShirt isComponent />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </form>
      </div>
      
      <div className="border rounded-lg p-2 mt-4">
        <Table>
          <TableBody>
            {data.map((shirt) => (
              <TableRow key={shirt.id}>
                <TableCell>{shirt.name}</TableCell>
                <TableCell>{shirt.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
