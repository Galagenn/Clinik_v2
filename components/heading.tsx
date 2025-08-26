import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return <h2 className={cn("text-xl sm:text-3xl font-semibold", className)}>{children}</h2>;
}
