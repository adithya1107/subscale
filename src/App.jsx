import ButtonGradient from "./assets/svg/ButtonGradient";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subsystems from "./components/Subsystems";
import About from "./components/About";
import Sponsors from "./components/Sponsors";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Subsystems />
        <Team />
        <Sponsors />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
