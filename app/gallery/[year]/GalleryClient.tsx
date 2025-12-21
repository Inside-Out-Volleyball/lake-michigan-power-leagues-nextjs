"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";

type GalleryClientProps = {
  year: string;
  images: string[];
};

export default function GalleryClient({ year, images }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        <Navbar />
        <PageHeader title={`Gallery ${year}`} subtitle="No photos available" />
        <main className="max-w-7xl mx-auto px-4 py-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 hover:border-blue-400 hover:text-blue-900 hover:shadow-lg font-semibold rounded-lg transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Gallery
          </Link>
          <div className="text-center text-gray-600">
            <p>No photos found for {year}.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Navbar />
      <PageHeader
        title={`Gallery ${year}`}
        subtitle={`Photos from Lakeshore Volleyfest ${year}`}
      />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 hover:border-blue-400 hover:text-blue-900 hover:shadow-lg font-semibold rounded-lg transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Gallery
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square overflow-hidden rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group"
            >
              <Image
                src={image}
                alt={`Gallery photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full size photo"
              fill
              sizes="90vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
