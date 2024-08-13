import placeHolder from "../public/placeholder.svg";
import pizza4 from "../public/pizza4.png";
import Image from "next/image";
// maybe for future use
export default function MenuSnippet() {
  return (
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
              Choose from our selection of classic and specialty pizzas, made
              with the finest ingredients.
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
                src={pizza4}
                width="500"
                height="500"
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
                src=""
                width="500"
                height={500}
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
                src={placeHolder}
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
  );
}
