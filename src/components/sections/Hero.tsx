import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Perfect <br />
            Measurements,
            <br />
            <span className="text-purple-600">Every Time.</span>
          </h1>
          <p className="text-gray-600 max-w-md">
            A fashion-forward app that helps designers, tailors, and stylists
            create perfect customer measurements. Our mobile app brings
            precision and efficiency to your fashion business.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2 text-sm"
            >
              <Image
                src="/apple-logo.svg"
                alt="Apple"
                width={20}
                height={20}
                className="mr-2"
              />
              App Store
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2 text-sm"
            >
              <Image
                src="/google-play.svg"
                alt="Google Play"
                width={20}
                height={20}
                className="mr-2"
              />
              Google Play
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              Based on 1000+ reviews
            </span>
          </div>
        </div>
        <div className="relative flex justify-center">
          <Image
            src="/images/mobile_mockup.png"
            alt="FashionHive App"
            width={300}
            height={600}
            className="z-10 relative"
          />
          <div className="absolute w-64 h-64 bg-purple-100 rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}
