import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex items-center justify-center gap-x-4 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Richard Cuellar-Lopez</span>
          <span aria-hidden="true">&middot;</span>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
