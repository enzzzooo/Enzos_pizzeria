export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#8b0000] text-primary-foreground">
        <a href="#" className="flex items-center justify-center">
          <PizzaIcon className="h-6 w-6" />
          <span className="sr-only">Slice of Heaven Pizza</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Menu
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#8b0000] text-primary-foreground">
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
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-[#8b0000] shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Order Now
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-[#8b0000] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-[#8b0000] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Menu
                  </a>
                </div>
              </div>
              <img
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
                  <img
                    src="/placeholder.svg"
                    alt="Margherita Pizza"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="bg-gray-100 px-6 py-4">
                  <button className="bg-[#8b0000] text-white px-4 py-2 rounded-md hover:bg-primary-foreground">
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
                  <img
                    src="/placeholder.svg"
                    alt="Pepperoni Pizza"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="bg-gray-100 px-6 py-4">
                  <button className="bg-[#8b0000] text-white px-4 py-2 rounded-md hover:bg-primary-foreground">
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
                  <img
                    src="/placeholder.svg"
                    alt="Veggie Pizza"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="bg-gray-100 px-6 py-4">
                  <button className="bg-[#8b0000] text-white px-4 py-2 rounded-md hover:bg-primary-foreground">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Slice of Heaven Pizza: Crafting Delicious Pies Since 1985
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At Slice of Heaven Pizza, we take pride in our commitment to
                    using the freshest ingredients and time-honored recipes to
                    create the perfect pizza experience. Our family-owned
                    business has been serving the community for over 35 years,
                    and we continue to innovate and delight our customers with
                    each slice.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our mission is to bring people together through the
                    universal language of pizza, fostering connections and
                    creating lasting memories. Whether you're craving a classic
                    Margherita or a unique specialty pie, we strive to deliver a
                    slice of heaven with every bite.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="About"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
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
                  Have a question, comment, or feedback? We'd love to hear from
                  you!
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8b0000]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8b0000]"
                />
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8b0000]"
                />
                <button
                  type="submit"
                  className="bg-[#8b0000] text-white px-4 py-2 rounded-md hover:bg-primary-foreground"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#8b0000] p-6 md:py-12 w-full text-primary-foreground">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <a href="#" className="hover:underline underline-offset-4">
              About Us
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Our Story
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Careers
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Menu</h3>
            <a href="#" className="hover:underline underline-offset-4">
              Classic Pizzas
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Specialty Pizzas
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Sides & Drinks
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <a href="#" className="hover:underline underline-offset-4">
              FAQs
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Nutrition Info
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Franchise Opportunities
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <a href="#" className="hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Cookie Policy
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <a href="#" className="hover:underline underline-offset-4">
              Support
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Feedback
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Partnerships
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PizzaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 11h.01" />
      <path d="M11 15h.01" />
      <path d="M16 16h.01" />
      <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
      <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
    </svg>
  );
}
