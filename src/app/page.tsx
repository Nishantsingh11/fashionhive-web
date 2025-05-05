import Navigation from "@/src/components/layout/Navigation"
import { Hero } from "@/src/components/sections/Hero"


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