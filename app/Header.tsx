function PizzaIcon(props: any) {
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

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-red-600 text-primary-foreground">
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
  );
}
