import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-linear-to-r from-blue-700 via-blue-800 to-blue-900 text-white shadow-lg">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -left-20 top-[-10%] h-64 w-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute right-[-5%] top-1/4 h-72 w-72 rounded-full bg-indigo-500 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-6 md:py-8 text-center">
        <div className="mx-auto mb-4 md:mb-5 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl">
            <Image
              src="/volleyfest-logo2.png"
              alt="Lakeshore Volleyfest 2026"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2" style={{ fontFamily: "var(--font-bebas-neue)" }}>{title}</h1>
          <p className="text-base md:text-lg font-medium text-blue-50/90">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
