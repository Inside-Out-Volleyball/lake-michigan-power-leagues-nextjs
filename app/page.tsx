import Image from "next/image";
import Script from "next/script";
import JuicerInstagram from "./components/JuicerInstagram";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import { tournamentData } from "./data/tournamentData";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Navbar />
      <PageHeader 
        title="Lakeshore Volleyfest"
        subtitle={`${tournamentData.dates} · West Michigan`}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Image Slider */}
        <ImageSlider />

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-8">
          <Card
            title="Tournament Information"
            link="/tournament-information"
          />
          <Card
            title="Schedule"
            link="/tournament-information#schedule"
          />
          <Card
            title="Hotel Information"
            link="https://www.teamtravelsource.com/volleyball_lander/lakeshorevolleyfest/"
          />
          <Card
            title="Tickets/Admission"
            link="https://iplexsports.com/event/dli94fTSUUPUj5ko"
          />
          <Card
            title="Locations"
            link="/locations"
          />
          <Card
            title="Livestream"
            link="/livestream"
          />
        </div>

        {/* Tournament Details */}
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            {tournamentData.name}
          </h2>
          <p className="text-2xl font-semibold text-center text-blue-700 mb-6">
            {tournamentData.dates}
          </p>
          <p className="text-center text-lg mb-8 text-gray-700">
            <span className="font-semibold">Hosted by {tournamentData.hostedBy}</span><br />
            {tournamentData.location}
          </p>

          <div className="max-w-3xl mx-auto space-y-3 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">AGE GROUPS:</div>
              <div className="p-4 bg-white text-black">{tournamentData.ageGroups}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">ENTRY FEE:</div>
              <div className="p-4 bg-white text-black">{tournamentData.entryFees.older.cost} ({tournamentData.entryFees.older.age}) {tournamentData.entryFees.younger.cost} ({tournamentData.entryFees.younger.age})</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">ENTRY DEADLINE:</div>
              <div className="p-4 bg-white text-black">{tournamentData.entryDeadline}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">REGISTRATION:</div>
              <div className="p-4 bg-white text-black font-bold"><a href={tournamentData.registrationUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">{tournamentData.registrationDisplay}</a></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">RULES:</div>
              <div className="p-4 bg-white text-black">{tournamentData.rules}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">ENTRY FEES PAYABLE TO:</div>
              <div className="p-4 bg-white text-black">{tournamentData.entryFeesPayableTo}</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-base leading-relaxed text-gray-700 bg-blue-50 p-6 rounded-lg">
            <p>
              The AAU Super Regional is a National AAU Sponsored Event. Winners in each age
              division will have all or part of their fee waived for AAU Nationals. The refund is a sliding scale 100%-30% based
              on number of teams entered in a division. 16 teams equals full refund, any less than 16 teams would be paid on a
              percentage basis.
            </p>
            <p>
              Inside Out will guarantee a full entry fee to the 1st place team in each Open division.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>This event is sanctioned by the Amateur Athletic Union of the U. S., Inc.</li>
              <li>All participants must have a current AAU membership.</li>
              <li>AAU membership may not be included as part of the entry fee to the event.</li>
            </ul>
          </div>

          {/* AAU Logos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 pt-8 border-t border-blue-200">
            <div className="relative w-80 h-40">
              <Image
                src="/aau_logo.png"
                alt="AAU Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-80 h-40">
              <Image
                src="/aauvball_logo.png"
                alt="AAU Volleyball Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        </div>

        </div>

        {/* Instagram Embed - Below main content */}
        <section className="mt-12">
          <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-4">
            <JuicerInstagram />
          </div>
        </section>
      </main>

      <Script async src="//www.instagram.com/embed.js" />

      <Footer />
    </div>
  );
}

function Card({ title, link }: { title: string; link: string }) {
  return (
    <a
      href={link}
      className="relative block bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center group overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
          <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-3 transition-colors duration-300">
          {title}
        </h2>
        <span className="text-blue-600 font-semibold group-hover:underline">Read more »</span>
      </div>
    </a>
  );
}
