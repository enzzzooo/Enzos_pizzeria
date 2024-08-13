import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import pizza3 from "../public/pizza3.jpeg";
import Image from "next/image";
import Contact from "./Contact";
export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Slice of Heaven Pizza
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Indulge in the perfect slice of pizza, made with the
                    freshest ingredients and baked to perfection.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-red-600 shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Order Now
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-red-600 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Menu
                  </a>
                </div>
              </div>
              <Image
                src={pizza3}
                width="550"
                height="550"
                alt=""
                className="object-[65%] mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
