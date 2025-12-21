"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import { livestreams } from "@/app/data/livestreams";

export default function LivestreamPage() {
  const [selectedCourt, setSelectedCourt] = useState(livestreams[0]?.court ?? "");

  const activeStream = useMemo(
    () => livestreams.find((stream) => stream.court === selectedCourt) ?? livestreams[0],
    [selectedCourt]
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Navbar />
      <PageHeader 
        title="Livestream"
        subtitle="Watch courts live during Lakeshore Volleyfest"
      />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-6 flex flex-wrap items-center gap-3 justify-between">
          <h2 className="text-2xl font-bold text-blue-900">Select a court to watch</h2>
          <Link
            href="https://www.youtube.com/@insideoutvolleyball"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-red-300 bg-linear-to-r from-red-600 to-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30 shadow-inner">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current"
              >
                <path d="M10 9.5v5l4.5-2.5L10 9.5zm10-2.25c0-1.24-1-2.25-2.22-2.25H6.22C5 5 4 6 4 7.25v9.5C4 18 5 19 6.22 19h11.56C19 19 20 18 20 16.75v-9.5z" />
              </svg>
            </span>
            <span className="whitespace-nowrap">Inside Out YouTube</span>
            <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-0.5">↗</span>
          </Link>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {livestreams.map((stream) => (
            <button
              key={stream.court}
              type="button"
              onClick={() => setSelectedCourt(stream.court)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                stream.court === activeStream?.court
                  ? "border-blue-500 bg-blue-600 text-white shadow"
                  : "border-blue-200 bg-white text-blue-800 hover:-translate-y-0.5 hover:shadow"
              }`}
            >
              {stream.court}
            </button>
          ))}
        </div>

        {activeStream && (
          <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-blue-900">{activeStream.court}</h3>
              </div>
            </div>

            {activeStream.embedUrl ? (
              <div className="relative w-full overflow-hidden rounded-lg border border-blue-100" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={activeStream.embedUrl}
                  title={`${activeStream.court} livestream`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-blue-200 bg-blue-50 text-blue-900 p-4 text-sm">
                Stream will appear here once available.
              </div>
            )}

            {activeStream.note && (
              <p className="text-sm text-gray-600">{activeStream.note}</p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
