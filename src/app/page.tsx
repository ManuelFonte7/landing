import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Steps from "@/components/Steps";
import CaseStudies from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

// La pagina è solo l'elenco ordinato delle sezioni.
// Per cambiare l'ordine basta spostare le righe.
export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Header />
      <Hero />
      <ProblemSolution />
      <Steps />
      <CaseStudies />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
