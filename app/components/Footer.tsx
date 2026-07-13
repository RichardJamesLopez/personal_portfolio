import Link from "next/link"
import type { SVGProps } from "react"

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.66 7.66 0 0 1 8 3.46c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M0 1.15C0 .51.53 0 1.18 0h13.64C15.47 0 16 .51 16 1.15v13.7c0 .64-.53 1.15-1.18 1.15H1.18C.53 16 0 15.49 0 14.85V1.15Zm4.94 12.24V6.17H2.54v7.22h2.4ZM3.74 5.19c.84 0 1.36-.55 1.36-1.24-.02-.7-.52-1.24-1.34-1.24-.82 0-1.36.54-1.36 1.24 0 .69.52 1.24 1.31 1.24h.03Zm4.9 8.2V9.36c0-.22.02-.43.08-.59.17-.43.56-.88 1.21-.88.85 0 1.19.65 1.19 1.6v3.9h2.4V9.21c0-2.24-1.2-3.28-2.8-3.28-1.29 0-1.87.71-2.19 1.21h.03v-.97h-2.4c.03.68 0 7.22 0 7.22h2.48Z" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6.75h2.45L9.69 6.89 16 15.25h-4.94L7.2 10.19l-4.43 5.06H.32l5.73-6.57L0 .75h5.06l3.5 4.62L12.6.75Zm-.86 13.03h1.36L4.32 2.15H2.87l8.87 11.63Z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RichardJamesLopez",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/richardjameslopez",
    icon: LinkedInIcon,
  },
  {
    label: "X",
    href: "https://x.com/RichLopezNY",
    icon: XIcon,
  },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-5 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Richard Cuellar-Lopez</span>
            <span aria-hidden="true">&middot;</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>

          <div className="flex items-center gap-2" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
