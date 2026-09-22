import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import { Services, ToolsBand } from "./components/Services";
import Portfolio from "./components/Portfolio";
import { Process, WhyMe } from "./components/Process";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen md:p-4 lg:p-6">
      <div className="mx-auto max-w-[1440px] bg-cream shadow-[0_30px_80px_-20px_rgba(13,13,12,0.45)] ring-1 ring-ink/10 md:rounded-[2rem] lg:rounded-[2.5rem]">
        <Nav />
        <main>
          <Hero />
          <About />
          <Services />
          <ToolsBand />
          <Portfolio />
          <Process />
          <WhyMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
