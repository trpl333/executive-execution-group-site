import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Results from "./components/Results";
import Engagement from "./components/Engagement";
import About from "./components/About";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const scrollToHow = () => {
    const el = document.getElementById("how");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero onBookCall={openModal} onSeeHow={scrollToHow} />
      <Problem />
      <Services />
      <HowWeWork />
      <Results />
      <Engagement />
      <About />
      <CTASection onBookCall={openModal} />
      <Footer />
      <BookingModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
