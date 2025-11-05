import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, RefreshCw } from "lucide-react";

type SkuDisplayProps = {
  sku: string;
  onReset: () => void;
};

export function SkuDisplay({ sku, onReset }: SkuDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader className="items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <CardTitle className="text-2xl font-bold">
            Configuração Concluída!
          </CardTitle>
          <CardDescription>
            Este é o código do produto que você montou.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md">
            <p className="text-2xl font-mono font-bold text-primary-foreground tracking-widest">
              {sku}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={onReset} size="lg" className="bg-accent hover:bg-accent/90">
            <RefreshCw className="mr-2 h-4 w-4" />
            Começar de Novo
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
