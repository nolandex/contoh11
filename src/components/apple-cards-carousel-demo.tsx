"use client";

import React, { useEffect, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const [selectedCard, setSelectedCard] = useState<any | null>(null);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedCard]);

  const cards = data.slice(0, 4).map((card, index) => (
    <div key={card.title} onClick={() => setSelectedCard(card)}>
      <Card card={card} index={index} />
    </div>
  ));

  return (
    <div id="layanan" className="w-full h-full py-20 relative">
      <h2 className="max-w-7xl mx-auto text-center text-xl md:text-5xl font-bold text-white font-sans">
        Layanan Bisnovo
      </h2>

      <Carousel items={cards} />

      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start z-50 overflow-y-auto pt-24 px-4 pb-8"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-neutral-900 text-white rounded-2xl p-6 max-w-lg w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-white text-2xl z-10"
              onClick={() => setSelectedCard(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedCard.title}</h3>
            <div className="mb-4">{selectedCard.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}

interface DummyContentProps {
  title: string;
  customText: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ title, customText }) => {
  return (
    <div>
      <p className="text-white text-base md:text-lg font-sans whitespace-pre-line mb-4">
        {customText}
      </p>
    </div>
  );
};

const data = [
  {
    title: "Program Reseller Bisnovo",
    category: "Reseller",
    src: "/1.jpg", // <-- .jpg
    content: (
      <DummyContent
        title="Syarat dan Ketentuan - Program Reseller Bisnovo"
        customText={`1. Pendaftaran reseller gratis dan terbuka untuk umum.\n
2. Reseller akan mendapatkan website katalog dan alat / materi promosi.\n
3. Profit +100% / produk, dan bisa lebih tergantung produk.\n
4. Reseller dilarang menjual dengan harga di bawah harga resmi Bisnovo.\n
5. Promosi dilarang mengandung unsur SARA, kebohongan, atau menjanjikan hal yang tidak ada dalam paket.\n
6. Komisi akan dibayarkan melalui transfer bank atau e-wallet.\n
7. Bisnovo berhak mencabut status reseller jika melanggar aturan.`}
      />
    ),
  },
  {
    title: "Kolaborasi Bisnis & Pertukaran Ide",
    category: "Kolaborasi",
    src: "/2.jpg", // <-- .jpg
    content: (
      <DummyContent
        title="Syarat dan Ketentuan - Kolaborasi Bisnis"
        customText={`1. Program kolaborasi terbuka untuk pelaku bisnis digital, UMKM, dan pemula yang ingin berkembang bersama.\n
2. Kolaborasi bisa berupa: sharing ide, joint venture, pengembangan produk bersama, atau pertukaran layanan.\n
3. Segala bentuk pembagian hasil atau kerja sama harus berdasarkan persetujuan tertulis kedua belah pihak.\n
4. Bisnovo tidak bertanggung jawab atas kerugian dari kolaborasi yang dilakukan di luar fasilitasi resmi.\n
5. Semua informasi yang dibagikan selama diskusi kolaborasi dianggap rahasia dan tidak boleh disebarluaskan tanpa izin.`}
      />
    ),
  },
  {
    title: "Program Iklan Bersama (Joint Ads)",
    category: "Iklan",
    src: "/3.jpg", // <-- .jpg
    content: (
      <DummyContent
        title="Syarat dan Ketentuan - Iklan Bersama"
        customText={`1. Program ini ditujukan untuk partner yang ingin mempromosikan produk/jasa dengan biaya iklan kolektif.\n
2. Partisipasi dana per individu adalah minimal Rp100.000 untuk setiap siklus kampanye.\n
3. Target, audiens, dan media iklan akan ditentukan bersama atau oleh tim Bisnovo dengan transparansi laporan.\n
4. Setiap peserta akan mendapatkan bukti iklan dan laporan performa (view, klik, dll) pasca kampanye.\n
5. Tidak ada jaminan penjualan; tujuan iklan adalah untuk menjangkau lebih banyak calon pembeli.\n
6. Dana yang sudah masuk tidak dapat ditarik kembali setelah iklan dijalankan.\n
7. Tidak diperkenankan menyisipkan produk berbau MLM, ilegal, atau bertentangan dengan hukum.`}
      />
    ),
  },
  {
    title: "Paket Bisnis Digital",
    category: "Paket",
    src: "/4.jpg", // <-- .jpg
    content: (
      <DummyContent
        title="Syarat dan Ketentuan - Paket Bisnis Digital"
        customText={`1. Klien akan mendapatkan: website landing page, desain konten sosial media, booster sosial media, copywriting, SEO dasar, dan video promosi.\n
2. Semua materi dibuat berdasarkan brief yang disetujui oleh klien.\n
4. Lama pengerjaan standar adalah 1 hari kerja setelah pembayaran dan brief lengkap diterima.\n
5. Pembayaran minimal 50% di depan; sisa pelunasan sebelum final delivery.\n
7. Hak cipta desain dan konten dimiliki oleh klien setelah pelunasan penuh, kecuali aset pihak ketiga.\n
8. Bisnovo tidak bertanggung jawab atas penurunan performa jika konten atau website dimodifikasi oleh pihak luar tanpa konsultasi.`}
      />
    ),
  },
];
