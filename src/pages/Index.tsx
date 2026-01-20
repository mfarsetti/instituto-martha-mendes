import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Slogans from "@/components/home/Slogans";
import Pillars from "@/components/home/Pillars";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import PalestrasConsultorias from "@/components/home/PalestrasConsultorias";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import PageTransition from "@/components/animations/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Slogans />
          <Pillars />
          <FeaturedCourses />
          <PalestrasConsultorias />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
