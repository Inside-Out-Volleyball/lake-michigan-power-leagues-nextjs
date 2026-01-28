import { unstable_cache } from "next/cache";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import WaveDivider from "../components/WaveDivider";
import LocationCard from "@/app/components/LocationCard";
import { client } from "@/src/sanity/client";

// Revalidate page every 1 hour (ISR - Incremental Static Regeneration)
export const revalidate = 3600;

interface SanityLocation {
  _id: string;
  locationName: string;
  addressLine1: string;
  addressLine2: string;
  seating?: string;
  concessions?: boolean;
  paymentMethods?: string[];
  parkingMapUrl?: string;
}

// Cache locations for 1 hour (3600 seconds)
const getLocations = unstable_cache(
  async (): Promise<SanityLocation[]> => {
    const query = `*[_type == "location"] | order(locationName asc)`;
    return await client.fetch(query);
  },
  ["locations"],
  { revalidate: 3600 }
);

export default async function LocationsPage() {
  const sanityLocations = await getLocations();

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Navbar />
      <PageHeader 
        title="Locations"
        subtitle="Playing venues, addresses, and seating info"
      />

      <WaveDivider />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sanityLocations.map((loc) => (
            <LocationCard key={loc._id} location={loc} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
