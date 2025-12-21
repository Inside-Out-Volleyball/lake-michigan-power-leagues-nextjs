import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

// Cache for 1 hour
export const revalidate = 3600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get('year');

  try {
    const { blobs } = await list({
      prefix: year ? `gallery/${year}/` : 'gallery/',
      token: process.env.vfest_READ_WRITE_TOKEN,
    });

    if (year) {
      // Return images for specific year
      const images = blobs
        .filter((blob) => !blob.pathname.endsWith('/'))
        .map((blob) => blob.url)
        .sort();

      const response = NextResponse.json({ images, year });
      response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
      return response;
    } else {
      // Return available years
      const yearPaths = new Set<string>();
      blobs.forEach((blob) => {
        const match = blob.pathname.match(/^gallery\/(\d{4})\//);
        if (match) {
          yearPaths.add(match[1]);
        }
      });

      const years = Array.from(yearPaths).sort().reverse(); // Most recent first
      const response = NextResponse.json({ years });
      response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
      return response;
    }
  } catch (error) {
    console.error('Failed to fetch gallery data:', error);
    return NextResponse.json({ images: [], years: [] }, { status: 500 });
  }
}
