import Header from "@/components/Header";
import Hero from "@/components/Hero";
import type {NextPage} from "next";
import Head from "next/head";
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main >
      <div className = "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a0c0b2]/80">
        <Head>
          <title>Kris' Portfolio</title>
        </Head>
        <h1 className = "text-blue-800">Let's build a portfolio</h1>
        <Header/>

        <section id="hero" className ="snap-start">
          <Hero/>

        </section>

        <section id="about" className = "snap-center">
          <About/>
        </section>

        <section id="experience" className = "snap-center">
          <Experience/>
        </section>

        <section id="skills" className = "snap-start">
          <Skills/>
        </section>

        <section id="projects" className = "snap-start">
          <Projects/>
        </section>
        
        <section id="contact" className = "snap-start">
          <Contact/>
        </section>

        <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img src="https://media.licdn.com/dms/image/D4E03AQE8--3JhW9ccw/profile-displayphoto-shrink_400_400/0/1672415386371?e=1704326400&v=beta&t=qOUzuxwNHIN8XKP9Io9PjoJwRyJYpzVK7V49u8cvcW8"
             alt=""
             className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
             />
          </div>
        </footer> 
        </Link>
        
      </div>
    </main>
  )
}
 export default Home