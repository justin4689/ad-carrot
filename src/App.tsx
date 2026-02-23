import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

import Services from "./components/Services";
import ProjectShowCase from "./components/ProjectShowCase";
import AdAgencyPackages from "./components/AdAgencyPackages";
import Team from "./components/Team";
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
    </div>
  );
}

export default App;
