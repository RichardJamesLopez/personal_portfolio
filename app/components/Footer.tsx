import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
<<<<<<< HEAD
          {["About", "Work", "Services", "Contact", "Privacy", "Terms"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {item}
              </Link>
=======
          {["Work", "About", "Contact", "Privacy", "Terms"].map((item) => (
            <div key={item} className="pb-6">
              {item === "Terms" || item === "Privacy" ? (
                <Link
                  href="/terms"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              ) : item === "Contact" ? (
                <Link
                  href="#contact"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              ) : (
                <Link
                  href="https://ourmada.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              )}
>>>>>>> master
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
<<<<<<< HEAD
          Designed & Developed with ❤️ by Dollar Gill. Copyright Flowers & Saints
=======
          Designed & Developed with V0 templates. Copyright Richard Cuellar-Lopez
>>>>>>> master
        </p>
      </div>
    </footer>
  )
}
