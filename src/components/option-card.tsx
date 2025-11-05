import type { Option } from "@/lib/triage";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type OptionCardProps = {
  option: Option;
  onClick: () => void;
};

export function OptionCard({ option, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group text-left rounded-lg overflow-hidden w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-opacity-75"
      )}
    >
      <Card className="h-full transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-accent">
        <CardContent className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={option.picture}
              alt={option.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-card">
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
            {option.label}
          </h3>
        </CardFooter>
      </Card>
    </button>
  );
}
