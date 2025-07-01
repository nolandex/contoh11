import {
  LucideIcon,
  Globe,
  MessageSquare,
  Smartphone,
  TrendingUp,
  FileText,
  Users,
} from "lucide-react";

// TYPE DEFINITIONS
interface Plan {
  id: 'basic' | 'pro' | 'reseller';
  title: string;
  desc: string;
  monthlyPrice: number;
  badge?: string;
  buttonText: string;
  features: string[];
  orderUrl: string;
}

interface Perk {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Review {
  img: string;
  name: string;
  username: string;
  review: string;
}

interface Faq {
  question: string;
  answer: string;
}

// SITE CONFIG
export const siteConfig = {
  companyName: "Bisnovo",
  contactEmail: "hello@bisnovo.id",
  contactPhone: "6285156779923",
  copyright: `© ${new Date().getFullYear()} Bisnovo. All rights reserved.`,
  currency: "Rp",
  orderBasePath: "/pesan-sekarang",
};

// HERO CONTENT
export const heroContent = {
  badge: {
    mainText: "Promo Launching!",
    subText: "Cepat dan mudah",
  },
  headline: "Bisnovo siap bangun Bisnis Profesional",
  subheadline: `Gabung dalam program reseller, kembangkan ide melalui kolaborasi bisnis, dan nikmati keuntungan dari bagi hasil iklan bersama kami`,
  ctaPrimary: {
    text: "Lihat Paket Kami",
    href: "#pricing",
  },
  ctaSecondary: {
    text: "Lihat Penawaran",
    href: "#pricing",
  },
};

// PERKS CONTENT (Revisi Headline dan Subheadline)
export const perksContent = {
  badge: "Solusi Lengkap",
  headline: "Semua Dukungan untuk Memulai dan Menjalankan Bisnis Online",
  subheadline: `${siteConfig.companyName} Bisnovo team support penuh klien.`,
  perks: [
    {
      title: "Support Reseller",
      description: "Website dan alat promosi gratis untuk membantu reseller memulai bisnis dengan mudah.",
      icon: Users,
    },
    {
      title: "Kolaborasi Bisnis Profit Tinggi",
      description: "Peluang bisnis dengan permintaan tinggi dan keuntungan besar melalui kolaborasi strategis.",
      icon: TrendingUp,
    },
    {
      title: "Free materi Iklan",
      description: "Klien dapat mengelola program iklan sendiri dengan materi iklan gratis yang kami sediakan.",
      icon: FileText,
    },
    {
      title: "Fast Respon",
      description: "Tim Bisnovo dengan 3 admin siap memberikan respon cepat untuk mendukung bisnis Anda.",
      icon: MessageSquare,
    },
    {
      title: "Paket Bisnis Terjangkau",
      description: "Item digital marketing lengkap untuk membangun bisnis profesional dengan harga terjangkau.",
      icon: Smartphone,
    },
    {
      title: "Professional Team",
      description: "Bisnovo didukung oleh tim marketing berkualitas untuk memastikan kesuksesan bisnis Anda.",
      icon: Globe,
    },
  ] as Perk[],
};

// REVIEWS CONTENT
export const reviewsContent = {
  badge: "Testimoni",
  headline: "Apa Kata Klien Kami",
  subheadline:
    "Lihat bagaimana Bisnovo telah membantu ratusan pebisnis memulai usaha online mereka.",
  reviews: [
    {
      img: "https://i.pravatar.cc/150?u=reseller1",
      name: "Andi Wijaya",
      username: "@andi_reseller",
      review:
        "Dengan paket Bisnovo, saya bisa mulai jualan online hanya dalam 1 hari! Sekarang sudah punya 5 reseller bawahannya.",
    },
    {
      img: "https://i.pravatar.cc/150?u=umkm1",
      name: "Siti Rahayu",
      username: "@siti_kue",
      review:
        "Website dan chatbotnya sangat membantu. Orderan masuk terus bahkan saat saya tidur!",
    },
    {
      img: "https://i.pravatar.cc/150?u=mahasiswa1",
      name: "Budi Santoso",
      username: "@budi_startup",
      review:
        "Sebagai mahasiswa, paket ini sangat terjangkau. Sekarang bisa punya penghasilan sendiri tanpa ganggu kuliah.",
    },
    {
      img: "https://i.pravatar.cc/150?u=irt1",
      name: "Dewi Lestari",
      username: "@dewi_catering",
      review:
        "Dulu takut go-online karena tidak paham teknologi. Sekarang bisnis catering saya 80% order dari online!",
    },
  ] as Review[],
};

// PRICING CONTENT (BADGE DIPINDAHKAN)
export const pricingContent = {
  badge: "Paket Lengkap",
  headline: "Paket Bisnis Digital & Iklan Efektif",
  subheadline:
    "Dapatkan semua yang Anda butuhkan untuk mulai bisnis online hari ini juga.",
  plans: [
    {
      id: "reseller",
      title: "Reseller Bisnovo",
      desc: "Gabung jadi reseller dan mulai bisnis online Anda tanpa modal, didukung penuh oleh kami.",
      monthlyPrice: 0,
      buttonText: "Gabung Gratis",
      features: [
        "Free Website",
        "Subdomain & Hosting",
        "Materi Promosi",
        "Grup Reseller",
      ],
      orderUrl: `https://wa.me/${siteConfig.contactPhone}?text=Halo%20Bisnovo%2C%20saya%20tertarik%20untuk%20bergabung%20menjadi%20%22Reseller%20Bisnovo%22.%20Mohon%20informasinya.`,
    },
    {
      id: "pro",
      title: "Paket Bisnis Digital",
      desc: "Solusi lengkap untuk membangun kehadiran digital profesional dengan budget terjangkau.",
      monthlyPrice: 50,
      badge: "Paling Populer", // <-- BADGE SEKARANG DI SINI
      buttonText: "Daftar Sekarang",
      features: [
        "Website Profesional",
        "Free Domain my.id / biz.id dan Hosting",
        "10 Konten Desain",
        "Sosmed Boost",
        "SEO Basic",
        "Video Promosi",
      ],
      orderUrl: `https://wa.me/${siteConfig.contactPhone}?text=Halo%20Bisnovo%2C%20saya%20tertarik%20dengan%20paket%20%22Paket%20Bisnis%20Digital%22.%20Mohon%20informasinya.`,
    },
    {
      id: "basic",
      title: "Program Iklan",
      desc: "Kualitas program iklan terjamin. Bisnis yang diiklankan adalah hasil filter dari kolaborasi bisnis dengan demand dan profit tinggi.",
      monthlyPrice: 100,
      buttonText: "Mulai Sekarang",
      features: [
        "Meta Ads / TikTok Ads",
        "Strategi Iklan yang Terbukti",
        "Laporan Performa Iklan",
        "Konsultasi Iklan 1 Minggu",
      ],
      orderUrl: `https://wa.me/${siteConfig.contactPhone}?text=Halo%20Bisnovo%2C%20saya%20tertarik%20dengan%20paket%20%22Program%20Iklan%22.%20Mohon%20informasinya.`,
    },
  ] as Plan[],
};

// FOOTER CONTENT
export const footerContent = {
  faqHeadline: "Pertanyaan Umum",
  faqs: [
    {
      question: "Apa itu Program Iklan?",
      answer:
        "Program Iklan adalah paket untuk mempromosikan bisnis Anda melalui Meta Ads atau TikTok Ads. Kualitasnya terjamin karena bisnis yang diiklankan merupakan hasil filter dari kolaborasi bisnis dengan demand dan profit yang tinggi.",
    },
    {
      question: "Apakah website di Paket Bisnis Digital bisa kustom?",
      answer:
        "Ya, website dapat disesuaikan dengan kebutuhan bisnis Anda dengan template profesional yang kami sediakan.",
    },
    {
      question: "Berapa lama proses setup iklan atau website?",
      answer:
        "Proses setup iklan dan website selesai dalam 6-24 jam setelah konfirmasi pembayaran.",
    },
    {
      question: "Apakah ada biaya tambahan untuk domain atau hosting?",
      answer:
        "Tidak, domain my.id/biz.id dan hosting sudah termasuk dalam Paket Bisnis Digital tanpa biaya tambahan.",
    },
  ] as Faq[],
};
