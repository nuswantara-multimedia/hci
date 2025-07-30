import './globals.css'; // Global styles for your app
import Link from 'next/link'; // Import Link component for navigation

export const metadata = {
  title: 'HCI Project Website',
  description: 'A multi-page static website with Next.js and Vercel',
};

// Header Component
function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">HCI Corp</Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} HCI Corp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen container mx-auto p-4">
          {children} {/* This is where individual page content will be rendered */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
