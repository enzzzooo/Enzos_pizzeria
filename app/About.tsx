import Image from "next/image";
import pizza2 from "../public/pizza2.jpeg";
export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                About Us 🍕
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Slice of Heaven Pizza: Crafting Delicious Pies Since 1985
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Slice of Heaven Pizza, we take pride in our commitment to
                using the freshest ingredients 🍅🧀 and time-honored ⏳ recipes
                to create the perfect pizza experience. Our family-owned 👪
                business has been serving the community for over 35 years, and
                we continue to innovate and delight our customers with each
                slice.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to bring people together through the universal
                language of pizza, fostering connections and creating lasting
                memories. Whether you&apos;re craving a classic Margherita or a
                unique specialty pie, we strive to deliver a slice of heaven
                with every bite.
              </p>
            </div>
          </div>
          <Image
            src={pizza2}
            width="550"
            height="310"
            alt="About"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
