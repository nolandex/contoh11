// Lokasi: src/components/marketing/footer.tsx

"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { footerContent, siteConfig } from "@/config/content";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Link from "next/link";

// Definisikan tautan navigasi dan sosial media untuk footer
const footerNavLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#perks', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
];

const socialLinks = [
    { href: 'https://www.instagram.com/bisnovo', label: 'Instagram' },
    { href: 'https://www.tiktok.com/@bisnovo', label: 'TikTok' },
    { href: 'https://www.facebook.com/share/1H87XB9aw7/', label: 'Facebook' },
    { href: 'https://api.whatsapp.com/send/?phone=6285156779923', label: 'WhatsApp' },
];

const Footer = () => {
    // Fungsi untuk smooth scroll
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer id="footer" className="w-full py-10 bg-background text-foreground">
            {/* Bagian FAQ */}
            <Container>
                <Wrapper className="flex flex-col items-center pb-20">
                    <h1 className="text-2xl font-bold mb-6 text-center">
                        {footerContent.faqHeadline}
                    </h1>
                    <Accordion type="single" collapsible className="w-full max-w-2xl">
                        {footerContent.faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="w-full text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-left">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Wrapper>
            </Container>

            {/* --- REVISI: Layout diubah dan email digabung ke sosmed --- */}
            <Container>
                <Wrapper className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center sm:text-left border-t border-border">
                    {/* Kolom 1: Brand Info */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl font-bold">Bisnovo</h3>
                        <p className="text-sm text-secondary-foreground mt-2 max-w-xs">
                           Solusi digital untuk mengembangkan bisnis Anda ke level selanjutnya.
                        </p>
                    </div>

                    {/* Kolom 2: Berisi Tautan Cepat dan Kontak */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Sub-kolom 2a: Tautan Cepat */}
                        <div className="flex flex-col items-center sm:items-start">
                             <h4 className="text-lg font-semibold mb-3">Tautan Cepat</h4>
                             <ul className="space-y-2">
                                {footerNavLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={handleScroll}
                                            className="text-sm text-secondary-foreground hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                             </ul>
                        </div>
                        {/* Sub-kolom 2b: Hubungi Kami (Sosmed + Email) */}
                        <div className="flex flex-col items-center sm:items-start">
                             <h4 className="text-lg font-semibold mb-3">Hubungi Kami</h4>
                             <ul className="space-y-2">
                                {socialLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-secondary-foreground hover:text-primary transition-colors"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                             </ul>
                             <a
                                href="mailto:bisnovohq@gmail.com"
                                className="text-sm text-secondary-foreground hover:text-primary transition-colors mt-4"
                             >
                                Email
                             </a>
                        </div>
                    </div>
                </Wrapper>
            </Container>

            {/* Bagian Copyright yang paling bawah */}
            <Container>
                <Wrapper className="pt-8 flex items-center justify-center border-t border-border">
                    <p className="text-sm text-secondary-foreground">
                        {siteConfig.copyright}
                    </p>
                </Wrapper>
            </Container>
        </footer>
    );
};

export default Footer;
