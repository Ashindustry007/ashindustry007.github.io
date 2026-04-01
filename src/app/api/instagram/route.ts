
import { NextResponse } from 'next/server';

/**
 * @fileOverview Secure API route to fetch Instagram media.
 * Returns a 401 if unconfigured, allowing the client to handle fallback gracefully.
 */

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token || token === "") {
    return NextResponse.json(
      { error: 'Instagram Access Token is not configured.' },
      { status: 401 }
    );
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${token}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Instagram API request failed');
    }

    const data = await response.json();
    
    // Filter for images/videos and map to our expected structure
    const posts = data.data
      .filter((post: any) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
      .map((post: any) => ({
        id: post.id,
        media_url: post.media_url,
        permalink: post.permalink,
        caption: post.caption || '',
        timestamp: post.timestamp,
      }));

    return NextResponse.json(posts);
  } catch (error) {
    console.warn('Instagram API Error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve Instagram feed.' },
      { status: 502 }
    );
  }
}
