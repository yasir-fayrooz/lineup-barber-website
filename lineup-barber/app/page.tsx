"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";

export default function BarberPage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingModal />
    </div>
  );
}
