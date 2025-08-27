import BreadcrumbSection from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import Enroll from "@/components/enroll";
import Doctors from "./doctors";

export default function DoctorsPage() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BreadcrumbSection breadcrumbPage="Врачи" />
        <Doctors />
        <Testimonials />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
