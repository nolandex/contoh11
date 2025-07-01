import "@/styles/globals.css";
import { cn } from "@/functions";
import { inter, satoshi } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components";

// Metadata lengkap untuk SEO dan favicon
export const metadata = {
  title: "Bisnovo siap bangun Bisnis Profesional",
  description:
    "Gabung dalam program reseller, kembangkan ide melalui kolaborasi bisnis, dan nikmati keuntungan dari bagi hasil iklan bersama kami.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "msapplication-TileImage",
        url: "/ms-icon-144x144.png",
        type: "image/png",
        sizes: "144x144",
      },
    ],
  },
  manifest: "/manifest.json", // Untuk Progressive Web App (PWA) support
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          inter.variable,
          satoshi.variable
        )}
      >
        <Providers>
          <Toaster richColors theme="dark" position="top-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
