// src/components/marketing/companies.tsx

import Image from "next/image";
import Marquee from "../ui/marquee";

const Companies = () => {
    const logos = Array.from({ length: 8 }, (_, i) => ({
        src: `/logos/${i + 1}.svg`,
        alt: `Logo Perusahaan ${i + 1}`,
    }));

    return (
        <div className="flex w-full py-20">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">
                    Companies that trust us
                </h2>
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        <div className="flex gap-8 md:gap-12">
                            {logos.map((logo, index) => (
                                <Image
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={64} // Dikecilkan dari 96 ke 64
                                    height={24} // Dikecilkan dari 32 ke 24
                                    className="object-contain filter invert brightness-0" // Menjadikan SVG putih
                                />
                            ))}
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
