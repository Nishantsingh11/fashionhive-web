import TestimonialSlider from "../../components/sections/testimonial-slider"
export default function Home() {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Fashion Designer",
      company: "StyleCraft",
      content:
        "FashionHive transformed how I showcase my designs. The platform's intuitive interface and powerful features have helped me reach a wider audience and grow my brand exponentially.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "CEO",
      company: "TrendSetters Inc.",
      content:
        "As a fashion retailer, FashionHive has been instrumental in our digital transformation. The analytics and customer insights have helped us make data-driven decisions that boosted our sales by 40%.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      role: "Fashion Blogger",
      company: "StyleSpotlight",
      content:
        "I've tried many fashion platforms, but FashionHive stands out with its seamless user experience and powerful collaboration tools. It's become an essential part of my content creation process.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Marketing Director",
      company: "Couture Connect",
      content:
        "The ROI we've seen since implementing FashionHive has been remarkable. The platform's ability to connect us with the right audience has revolutionized our marketing strategy.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">What Our Users Say About FashionHive</h1>
      <div className="w-full max-w-5xl">
        <TestimonialSlider testimonials={testimonials} autoRotateInterval={5000} />
      </div>
    </main>
  )
}
