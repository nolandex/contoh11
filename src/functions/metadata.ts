import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

// Nama aplikasi bisa diatur di sini atau melalui environment variable
const APP_NAME = "Bisnovo";

export const generateMetadata = ({
    // Menggunakan Judul Utama Bisnovo sebagai default title
    title = "Bisnovo - Wujudkan Bisnis Online Impian Anda, Semudah Itu!",
    // Menggunakan Tagline Bisnovo sebagai default description
    description = "Solusi Lengkap, Terjangkau, dan Profesional untuk Pebisnis Pemula, Mahasiswa, hingga UMKM.",
    image = "/thumbnail-bisnovo.png", // Disarankan untuk membuat thumbnail khusus
    icons = [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/icons/favicon-32x32.png" // Ganti dengan favicon Bisnovo
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/icons/favicon-16x16.png" // Ganti dengan favicon Bisnovo
        },
    ],
    noIndex = false,
    // Keywords yang relevan dengan target pasar Bisnovo
    keywords = [
        "jasa pembuatan website",
        "bisnis online",
        "UMKM go digital",
        "solusi digital UMKM",
        "website untuk pemula",
        "website mahasiswa",
        "website terjangkau",
        "profil bisnis online",
        "jasa website profesional"
    ],
    author = APP_NAME,
    twitterHandle = "@bisnovo", // Ganti dengan handle Twitter Bisnovo
    type = "website",
    locale = "id_ID", // Mengubah locale ke Bahasa Indonesia
    alternates = {},
    publishedTime,
    modifiedTime
}: MetadataProps = {}): Metadata => {
    // PASTIKAN untuk mengatur NEXT_PUBLIC_APP_URL di file .env Anda
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://bisnovo.com");
    const imageUrl = image ? new URL(image, metadataBase).toString() : null;

    return {
        metadataBase,
        title: {
            template: `%s | ${APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: APP_NAME,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,

        // OpenGraph untuk Facebook, LinkedIn, dll.
        openGraph: {
            type,
            siteName: APP_NAME,
            title,
            description,
            ...(imageUrl && {
                images: [{
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title
                }]
            }),
            locale,
            alternateLocale: Object.keys(alternates),
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime })
        },

        // Twitter Card
        twitter: {
            card: imageUrl ? "summary_large_image" : "summary",
            site: twitterHandle,
            creator: twitterHandle,
            title,
            description,
            ...(imageUrl && { images: [imageUrl] })
        },

        // Robots
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Verification (isi value di file .env)
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
            yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
        },
    };
};
