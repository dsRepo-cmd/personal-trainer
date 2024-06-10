import React from "react";
import NavBar from "../containers/nav-bar/NavBar";
import Portfolio from "../containers/portfolio/Portfolio";
import Intro from "../containers/intro/Intro";
import Classes from "../containers/classes/Classes";
import Pricing from "../containers/pricing/Pricing";
import TrainingSchedule from "../containers/training-schedule/TrainingSchedule";
import Blog from "../containers/blog/Blog";
import Testimonials from "../containers/testimonials/Testimonials";
import Contact from "../containers/contact/Contact";
import FastContact from "../containers/fast-contact/FastContact";
import GoogleMaps from "../containers/google-maps/GoogleMaps";
import Footer from "../containers/footer/Footer";
import ToTop from "../containers/to-top/ToTop";
import ThemeSwitcher from "../containers/theme-switcher/ThemeSwitcher";
import Top from "../containers/top/Top";

interface HomeProps {
  className?: string;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Top />
      <NavBar />
      <Intro variant="white" />
      <Portfolio />
      <Classes variant="white" />
      <Pricing />
      <TrainingSchedule />
      <Blog variant="white" />
      <Testimonials variant="secondary" />
      <Contact variant="white" />
      <GoogleMaps />
      <FastContact />
      <Footer variant="white" />
      <ThemeSwitcher />
      <ToTop />
    </>
  );
};

export default Home;
