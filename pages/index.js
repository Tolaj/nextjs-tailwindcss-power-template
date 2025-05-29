/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroSection from "sections/LandingPage/HeroSection";
import FeaturesSection from "sections/LandingPage/FeaturesSection";
import AboutSection from "sections/LandingPage/AboutSecction";
import CTASection from "sections/LandingPage/CTASection/inde";
import PricingSection from "sections/LandingPage/PricingSection";
import TestimonialSection from "sections/LandingPage/TestimonialSection";
import FAQSection from "sections/LandingPage/FAQSection";
import TeamSection from "sections/LandingPage/TeamSection";
import BlogSection from "sections/LandingPage/BlogSection";
import ContactSection from "sections/LandingPage/ContactSection";
import BrandsSection from "sections/LandingPage/BrandsSection";


// default redirection 
// export async function getServerSideProps(context) {
//   return {
//     redirect: {
//       destination: '/auth/login',
//       permanent: false,
//     },
//   }
// }
export default function Index() {
  return (
    <>

      {/* <!-- ====== Navbar Section Start --> */}
      <IndexNavbar />
      {/* <!-- ====== Navbar Section End --> */}

      {/* <!-- ====== Hero Section Start --> */}
      <HeroSection />
      {/* <!-- ====== Hero Section End --> */}

      {/* <!-- ====== Features Section Start --> */}
      <FeaturesSection />
      {/* <!-- ====== Features Section End --> */}

      {/* <!-- ====== About Section Start --> */}
      <AboutSection />
      {/* <!-- ====== About Section End --> */}

      {/* <!-- ====== CTA Section Start --> */}
      <CTASection />
      {/* <!-- ====== CTA Section// End --> */}

      {/* <!-- ====== Pricing Section Start --> */}
      <PricingSection />
      {/* <!-- ====== Pricing Section End --> */}

      {/* <!-- ====== Testimonial Section Start --> */}
      <TestimonialSection />
      {/* <!-- ====== Testimonial Section End --> */}

      {/* <!-- ====== FAQ Section Start --> */}
      <FAQSection />
      {/* <!-- ====== FAQ Section End --> */}

      {/* <!-- ====== Team Section Start --> */}
      <TeamSection />
      {/* <!-- ====== Team Section End --> */}

      {/* <!-- ====== Blog Section Start --> */}
      <BlogSection />
      {/* <!-- ====== Blog Section End --> */}

      {/* <!-- ====== Contact Start ====== --> */}
      <ContactSection />
      {/* <!-- ====== Contact End ====== --> */}

      {/* <!-- ====== Brands Section Start --> */}
      <BrandsSection />
      {/* <!-- ====== Brands Section End --> */}

      {/* <!-- ====== Footer Section Start --> */}
      <Footer />
      {/* <!-- ====== Footer Section End --> */}

    </>

  );
}