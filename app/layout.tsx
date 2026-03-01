import "./globals.scss";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page-background">

          <nav>
            <ul className="main-nav">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/project">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {children}

        </div>
      </body>
    </html>
  );
}