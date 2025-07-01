// src/pages/index.tsx atau file halaman utama Anda

import {
    Background,
    // Companies sudah tidak digunakan, jadi bisa dihapus dari sini
    Container,
    Hero,
    Perks,
    Pricing,
    Reviews,
    Wrapper,
} from "@/components";
import { Spotlight } from "@/components/ui/spotlight";

// Impor komponen baru yang akan digunakan
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";

const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                {/* --- Hero Section --- */}
                <section>
                    <Container className="relative">
                        <Spotlight
                            className="-top-40 left-0 md:left-60 md:-top-20"
                            fill="rgba(255, 255, 255, 0.5)"
                        />
                        <Hero />
                    </Container>
                </section>

                {/* --- Apple Cards Carousel Section --- */}
                {/* Komponen Companies diganti dengan AppleCardsCarouselDemo.
                  Komponen ini sudah memiliki padding dan layout sendiri, 
                  sehingga tidak perlu dibungkus section/container tambahan.
                */}
                <AppleCardsCarouselDemo />

                {/* --- Perks Section --- */}
                <section>
                    <Perks />
                </section>

                {/* --- Pricing Section --- */}
                <section id="pricing">
                    <Pricing />
                </section>

                {/* --- Reviews Section --- */}
                <section>
                    <Reviews />
                </section>
            </Wrapper>
        </Background>
    );
};

export default HomePage;
