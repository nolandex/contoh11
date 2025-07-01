// Lokasi: src/components/marketing/reviews.tsx

"use client";

import { reviewsContent } from "@/config/content";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, active]);

  const isActive = (index: number) => index === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto w-full max-w-sm px-4 py-16 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 items-center gap-20 md:grid-cols-2">
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : testimonials.length - index,
                  y: isActive(index) ? [0, -40, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-between py-4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-bold text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-white">
                {testimonials[active].designation}
              </p>
              <blockquote className="mt-8 text-lg text-white">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(8px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.03 * index }}
                    className="inline-block"
                  >
                    {word} 
                  </motion.span>
                ))}
              </blockquote>
            </motion.div>
          </AnimatePresence>
          <div className="absolute right-0 top-0 flex gap-4">
            <button onClick={handlePrev} className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button onClick={handleNext} className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const testimonials = [
    {
      quote: "Program Reseller Bisnovo membuat saya bisa mulai bisnis tanpa modal besar. Website katalog dan link promosi sangat membantu penjualan saya!",
      name: "Andi Pratama",
      designation: "Reseller Bisnovo",
      src: "/images/a1.jpg",
    },
    {
      quote: "Kolaborasi Bisnis dengan Bisnovo membuka peluang baru untuk usaha saya. Sharing ide dengan tim mereka sangat menginspirasi!",
      name: "Siti Aisyah",
      designation: "Owner UMKM Fashion",
      src: "/images/a2.jpg",
    },
    {
      quote: "Program Iklan Bersama membantu produk saya menjangkau audiens lebih luas dengan biaya terjangkau. Laporan performa iklannya sangat transparan!",
      name: "Budi Santoso",
      designation: "Entrepreneur Kuliner",
      src: "/images/a3.jpg",
    },
    {
      quote: "Paket Setup Bisnis Online memberikan semua yang saya butuhkan untuk membangun kehadiran digital. Website dan konten promosinya sangat profesional!",
      name: "Rina Wijaya",
      designation: "Pemilik Toko Online",
      src: "/images/a4.jpg",
    },
  ];

  return (
    <div id="reviews" className="flex w-full flex-col items-center justify-center overflow-x-hidden py-12 md:py-16 lg:py-24">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <SectionBadge title="Kata Klien" />
          <h2 className="mt-6 font-heading text-2xl font-medium !leading-snug text-white md:text-4xl lg:text-5xl">
            Bisnovo Bantu Pebisnis Online Sukses
          </h2>
          <p className="mt-6 text-center text-base text-white md:text-lg">
            Testimoni dari klien kami yang telah merasakan manfaat layanan Bisnovo.
          </p>
        </div>
      </Container>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Reviews;
