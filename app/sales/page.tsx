import Footer from "@/components/footer";
import Header from "@/components/header";
import Sales from "@/components/sales";
import Enroll from "@/components/enroll";
import BreadcrumbSection from "@/components/breadcrumb";

export default function SalesPage() {
  return (
    <div className="wrapper">
      <Header />

      <main>
        <BreadcrumbSection breadcrumbPage="Акции" />
        <Sales />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
