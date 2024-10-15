import HeroImage from "../../components/ForHomePage/HeroImage/HeroImage";
import Hero from "../../components/ForHomePage/Hero/Hero";
import { HomePageSection } from "./HomePage.styled";

const Home = () => {
  return (
    <HomePageSection>
      <Hero />
      <HeroImage />
    </HomePageSection>
  );
};

export default Home;
