import { cn } from "@/lib/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {    
    firstBlobColor: string;
    secondBlobColor: string;
}

export default function BlurryBlob({    
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  return (
    <div className="min-h-72 min-w-48 max-w-screen max-h-screen items-center justify-center absolute">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "absolute -right-20 -top-0 h-72 w-full sm:w-72 animate-pop-blob rounded-full bg-yellow-400 p-8 opacity-100 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor,
          )}
        ></div>
        <div
          className={cn(
            "absolute -left-40 -top-24 h-72 sm:w-72 animate-pop-blob rounded-full bg-yellow-200 p-8 opacity-100 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor,
          )}
        ></div>
      </div>
    </div>
  );
}
