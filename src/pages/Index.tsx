import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import FeaturedCourses from "@/components/home/FeaturedCourses";
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
          <Pillars />
          <FeaturedCourses />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
