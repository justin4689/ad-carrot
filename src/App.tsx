import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

import Services from "./components/Services";
import ProjectShowCase from "./components/ProjectShowCase";
import AdAgencyPackages from "./components/AdAgencyPackages";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="overflow-y-hidden bg-orange-50 text-emerald-950 antialiased">
        <NavBar/>
        <Hero/>
        <About/>
        <Services />
        <ProjectShowCase/>
        <AdAgencyPackages />
        <Team />
        <Testimonials />
        <Faq />
        <ContactForm />

        
    </div>
  );
}

export default App;
