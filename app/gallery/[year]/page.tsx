import GalleryClient from "./GalleryClient";
import { list } from '@vercel/blob';

type GalleryPageProps = {
  params: Promise<{ year: string }>;
};

// Revalidate every hour
export const revalidate = 3600;

// Generate static pages for all available years at build time
export async function generateStaticParams() {
  try {
    const { blobs } = await list({
      prefix: 'gallery/',
      token: process.env.vfest_READ_WRITE_TOKEN!,
    });

    const yearPaths = new Set<string>();
    blobs.forEach((blob) => {
      const match = blob.pathname.match(/^gallery\/(\d{4})\//); 
      if (match) {
        yearPaths.add(match[1]);
      }
    });

    const years = Array.from(yearPaths);
    return years.map((year: string) => ({
      year: year,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

async function getGalleryImages(year: string) {
  try {
    const { blobs } = await list({
      prefix: `gallery/${year}/`,
      token: process.env.vfest_READ_WRITE_TOKEN!,
    });

    const images = blobs
      .filter((blob) => !blob.pathname.endsWith('/'))
      .map((blob) => blob.url)
      .sort();

    return images;
  } catch (error) {
    console.error('Failed to load gallery:', error);
    return [];
  }
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { year } = await params;
  const images = await getGalleryImages(year);

  return <GalleryClient year={year} images={images} />;
}