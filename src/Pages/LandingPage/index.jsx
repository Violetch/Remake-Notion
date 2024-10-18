import React from "react";
import LandingLayout from "../../Components/Layouts/LandingLayout";
import Hero from "../../Components/Sections/LandingSection/Hero";
import Navbar from "../../Components/Modules/Navbar";
import Write from "../../Components/Sections/LandingSection/Write";
import Plan from "../../Components/Sections/LandingSection/Plan";
import Organize from "../../Components/Sections/LandingSection/Organize";
import Forbes from "../../Components/Sections/LandingSection/Forbes";
import Get from "../../Components/Sections/LandingSection/Get";
import Start from "../../Components/Sections/LandingSection/Start";
import Everything from "../../Components/Sections/LandingSection/Everything";
import Started from "../../Components/Sections/LandingSection/Started";
import Footer from "../../Components/Sections/LandingSection/Footer";

const LandingPage = () => {
  return (
    <LandingLayout>
      <Navbar />
      <Hero />
      <Write />
      <Plan />
      <Organize />
      <Forbes />
      <Get />
      <Start />
      <Everything />
      <Started />
      <Footer />
    </LandingLayout>
  );
};

export default LandingPage;
