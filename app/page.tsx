"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "@/components/Navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <div className="main"></div>
                <NavbarComponent />
                <section className="bg-secondary about-section">
                    <About />
                </section>
                <section id='skills' className="skills-section">
                    <SkillsSection/>
                </section>
                <section id='projects' className="projects-section">
                    <Projects/>
                </section>
                <section id="education" className="eduaction-and-contact-section">
                    <Education/>
                    <Contact/>
                </section>
                <footer className="py-10">
                    <Footer/>
                </footer>
            </NextThemesProvider>
        </NextUIProvider>
    );
}
