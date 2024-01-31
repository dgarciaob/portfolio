import { ReactNode } from "react";
import { cn } from "@/lib/utils";

function MaxWidthWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-2xl px-4 lg:px-36", className)}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
