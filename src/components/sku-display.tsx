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
    <div className="flex flex-col items-center justify-center py-10 md:py-16">
      <Card className="w-full max-w-sm text-center shadow-xl bg-card">
        <CardHeader className="items-center p-4 md:p-6">
          <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mb-3" />
          <CardTitle className="text-xl md:text-2xl font-bold">
            Configuração Concluída!
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            Este é o código do produto que você montou.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <div className="bg-muted/50 p-3 md:p-4 rounded-md">
            <p className="text-xl md:text-2xl font-mono font-bold text-foreground tracking-widest">
              {sku}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center p-4 md:p-6">
          <Button onClick={onReset} size="lg" className="bg-primary hover:bg-primary/90">
            <RefreshCw className="mr-2 h-4 w-4" />
            Começar de Novo
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}