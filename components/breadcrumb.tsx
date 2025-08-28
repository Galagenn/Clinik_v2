import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadBrumbSectionProps {
  breadcrumbPage: string;
}

export default function BreadcrumbSection({
  breadcrumbPage,
}: BreadBrumbSectionProps) {
  return (
    <div className="pt-24 pb-6 sm:pt-28 sm:pb-10">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList className="text-base text-foreground/80">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-primary hover:underline">
                International Clinic of Asia
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground">{breadcrumbPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{breadcrumbPage}</h1>
      </div>
    </div>
  );
}
