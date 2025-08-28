import Footer from "@/components/footer";
import Header from "@/components/header";
import BreadcrumbSection from "@/components/breadcrumb";
import AboutUs from "@/components/about-us";
import Enroll from "@/components/enroll";

export default function AboutUsPage() {
  return (
    <div className="wrapper">
      <Header />

      <main>
        <BreadcrumbSection breadcrumbPage="О клинике" />
        <AboutUs />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
