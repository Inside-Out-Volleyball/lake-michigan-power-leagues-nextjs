import Image from "next/image";
import ImageSlider from "./ImageSlider";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden text-white shadow-lg">
      {/* Image Slider Background */}
      <div className="absolute inset-0 w-full h-full">
        <ImageSlider />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-4 py-6 md:py-8 text-center">
        <div className="mx-auto mb-4 md:mb-5 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl">
            <Image
              src="/LMOPL.png"
              alt="Lake Michigan Power Leagues Logo"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2" style={{ fontFamily: "var(--font-anton)" }}>{title}</h1>
          <p className="text-base md:text-lg font-medium text-white/90">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
