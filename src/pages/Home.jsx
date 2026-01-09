import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import EmergencyHelpSection from "../components/EmergencyHelpSection";
import useScrollFade from "../hooks/useScrollFade";
import Testimonial from "../components/Testimonial";
import SymptomsSection from "../components/SymptomsSection";
import HowWeCanHelp from "../components/HowWeCanHelp";
import WhoThisIsFor from "../components/WhoThisIsFor";
const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <HowWeCanHelp className="fade-left" />
      <WhoThisIsFor className="zoom-in" />
      <SymptomsSection className="fade-up" />
      <EmergencyHelpSection className="zoom-in" />
      <Testimonial className="fade-left" />


    </>
  );
};

export default Home;
