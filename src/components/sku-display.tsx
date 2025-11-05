import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, MessageSquare } from "lucide-react";
import type { Option } from "@/lib/triage";

type SkuDisplayProps = {
  product: Option;
  onReset: () => void;
};

export function SkuDisplay({ product, onReset }: SkuDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
        Produto encontrado
      </h2>
      <Card className="w-full max-w-sm overflow-hidden shadow-xl bg-card border-border">
        <CardContent className="p-0">
          <div className="relative aspect-square w-full bg-white">
            <Image
              src={product.picture}
              alt={product.label}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardContent>
        <div className="p-4 bg-card-foreground/5">
            <p className="text-base font-semibold text-card-foreground text-center">
              {product.label}
            </p>
        </div>
        <CardFooter className="grid grid-cols-1 gap-2 p-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Ver Preço
          </Button>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <MessageSquare className="mr-2 h-4 w-4" />
            Negociar no WhatsApp
          </Button>
        </CardFooter>
      </Card>
       <Button onClick={onReset} variant="outline" className="mt-8">
            <RefreshCw className="mr-2 h-4 w-4" />
            Começar de Novo
        </Button>
    </div>
  );
}
