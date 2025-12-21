import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import WavesTable from "../components/WavesTable";
import { tournamentData } from "../data/tournamentData";

export default function TournamentInformation() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Navbar />
      <PageHeader 
        title="Tournament Information"
        subtitle="April 25 & 26, 2026 · Michigan"
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link
            href="#schedule"
            className="block p-4 bg-white border-2 border-blue-200 rounded-lg hover:shadow-lg hover:border-blue-400 transition-all text-center"
          >
            <div className="text-lg font-bold text-blue-900 mb-1">Schedule</div>
            <div className="text-sm text-gray-600">Playing Waves & Schedule</div>
          </Link>
          <Link
            href="/locations"
            className="block p-4 bg-white border-2 border-blue-200 rounded-lg hover:shadow-lg hover:border-blue-400 transition-all text-center"
          >
            <div className="text-lg font-bold text-blue-900 mb-1">Locations</div>
            <div className="text-sm text-gray-600">Playing Sites & Addresses</div>
          </Link>
          <Link
            href="#contact-information"
            className="block p-4 bg-white border-2 border-blue-200 rounded-lg hover:shadow-lg hover:border-blue-400 transition-all text-center"
          >
            <div className="text-lg font-bold text-blue-900 mb-1">Contact Information</div>
            <div className="text-sm text-gray-600">Get in touch with us</div>
          </Link>
        </div>

        {/* Tournament Details Section */}
        <section id="tournament-details" className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-8 mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Tournament Details</h2>

          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Event Name:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.name}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Hosted By:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.hostedBy}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Dates:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.dates}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Location:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.location}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Age Groups:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.ageGroups}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Entry Fee:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.entryFees.older.cost} ({tournamentData.entryFees.older.age}) / {tournamentData.entryFees.younger.cost} ({tournamentData.entryFees.younger.age})</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Entry Deadline:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.entryDeadline}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Registration:</div>
              <div className="p-4 bg-white text-gray-800">
                <a
                  href={tournamentData.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-semibold"
                >
                  {tournamentData.registrationDisplay}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Rules:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.rules}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">Entry Fees Payable To:</div>
              <div className="p-4 bg-white text-gray-800">{tournamentData.entryFeesPayableTo}</div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-8 mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Schedule / Playing Waves</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              View the latest court-by-court schedules and updates.
            </p>
            <a
              href="https://results.advancedeventsystems.com/event/PTAwMDAwMzY5MTY90/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              2025 AES Results
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <WavesTable />
          </div>
        </section>

        {/* AAU Information Section */}
        <section id="aau-information" className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-8 mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">AAU Information</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              The AAU Super Regional is a <strong>National AAU Sponsored Event</strong>. Winners in each division (up to 4 divisions per age group) will have all or part of their fee waived for AAU Nationals. The Classic division winner will NOT be eligible. The refund is a sliding scale based on 16 teams in each age group.
            </p>

            <p>
              <strong>Inside Out will guarantee a full entry fee to the 1st place team in each Open division.</strong>
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <h3 className="font-bold text-blue-900 mb-3">AAU Requirements:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>This event is sanctioned by the Amateur Athletic Union of the U.S., Inc.</li>
                <li>All participants must have a current AAU membership.</li>
                <li>AAU membership may not be included as part of the entry fee to the event.</li>
                <li>AAU membership must be obtained before the competition begins.</li>
              </ul>
            </div>

            <p>
              Teams earning a free or discounted entry fee must contact volleyball@aausports.org before July 1st, 2026. Refund requests will not be accepted after July 1st, 2026. Winning teams WILL NOT automatically be refunded, nor will they be contacted by the National Office. Refunds will be issued after completion of the AAU National Tournament to teams who participated in the 2025 AAU National Tournament
            </p>
            <p>
              All teams must still enter the National Championships or Volleyball Festival by the entry deadline, regardless of the date of the Grand Prix or Super Regional. Spots will not be held for winning teams.
            </p>
          </div>

          {/* AAU Logos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 pt-8 border-t border-blue-200">
            <div className="relative w-48 h-32">
              <Image
                src="/aau_logo.png"
                alt="AAU Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-48 h-32">
              <Image
                src="/aauvball_logo.png"
                alt="AAU Volleyball Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact-information" className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-8 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-4">Rick Rykse</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Address:</strong><br />
                  3367 Hoyt St<br />
                  Muskegon, MI 49444
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  <a href="tel:2317393311" className="text-blue-600 hover:text-blue-800">
                    (231) 739-3311
                  </a>
                </p>
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:rwrykse@insideoutvolleyball.org" className="text-blue-600 hover:text-blue-800">
                    rwrykse@insideoutvolleyball.org
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-4">Additional Resources</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Inside Out Volleyball:</strong><br />
                  <a href="http://www.insideoutvolleyball.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    www.insideoutvolleyball.org
                  </a>
                </p>
                <p>
                  <strong>MJVBA:</strong><br />
                  <a href="http://www.mjvba.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    www.mjvba.com
                  </a><br />
                  <a href="mailto:mjvbaem@gmail.com" className="text-blue-600 hover:text-blue-800">
                    mjvbaem@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
