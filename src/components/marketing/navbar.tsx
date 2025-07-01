// Lokasi: src/components/marketing/navbar.tsx

'use client'

import Link from 'next/link'
import { useState } from 'react'
// --- REVISI DI SINI: Ganti ikon 'Building2' dengan 'LayoutGrid' untuk "Layanan" ---
import { Menu, X, Home, LayoutGrid, Sparkles, Tag, MessageSquare, Mail } from 'lucide-react'

// --- REVISI DI SINI: Mengubah link "Clients" menjadi "Layanan" ---
const navLinks = [
  { href: '#hero', label: 'Home', Icon: Home },
  { href: '#layanan', label: 'Layanan', Icon: LayoutGrid }, // <-- Perubahan di baris ini
  { href: '#perks', label: 'Features', Icon: Sparkles },
  { href: '#pricing', label: 'Pricing', Icon: Tag },
  { href: '#reviews', label: 'Reviews', Icon: MessageSquare },
  { href: '#footer', label: 'Contact', Icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.6)] backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0 text-white font-semibold text-lg">
            <Link href="#hero" onClick={handleScroll}>Bisnovo</Link>
          </div>

          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
           <div className="lg:hidden w-full px-4 pb-4 pt-2">
            <ul className="space-y-2">
              {navLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleScroll}
                    className="flex items-center gap-4 p-3 rounded-lg text-white hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-base font-medium">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
