import Navigation from "@/components/layout/Navigation"
import { Hero } from "@/components/sections/Hero"


export default function Home() {
  return (
    <main className="">
      <Navigation/>
      <section className="px-10">
      <Hero/>
      </section>
      
    </main>
  )
}