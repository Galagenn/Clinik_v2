import BreadcrumbSection from "@/components/breadcrumb";
import Enroll from "@/components/enroll";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AllServices from "./all-services";

export default function Services() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BreadcrumbSection breadcrumbPage="Услуги" />
        <AllServices />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
