export default function Footer() {
  return (
    <footer className="bg-red-600 p-6 md:py-12 w-full text-primary-foreground">
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
  );
}
