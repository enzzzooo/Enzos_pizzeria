import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
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
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Our Menu
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Delicious Pizza Options
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our selection of classic and specialty pizzas,
                  made with the finest ingredients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Margherita</h3>
                  <p className="text-gray-500 mb-4">
                    Tomato sauce, fresh mozzarella, and basil.
                  </p>
                  <Image
                    src="/placeholder.svg"
                    alt="Margherita Pizza"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="bg-gray-100 px-6 py-4">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-primary-foreground">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pepperoni</h3>
                  <p className="text-gray-500 mb-4">
                    Tomato sauce, mozzarella, and pepperoni.
                  </p>
                  <Image
                    src="/placeholder.svg"
                    alt="Pepperoni Pizza"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="bg-gray-100 px-6 py-4">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-primary-foreground">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Veggie</h3>
                  <p className="text-gray-500 mb-4">
                    Tomato sauce, mozzarella, and fresh vegetables.
                  </p>
                  <Image
                    src="/placeholder.svg"
                    alt="Veggie Pizza"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="bg-gray-100 px-6 py-4">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-primary-foreground">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question, comment, or feedback? We&apos;d love to hear
                  from you!
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-primary-foreground"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
