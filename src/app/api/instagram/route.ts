/**
 * @fileOverview This route is disabled for Static Export compatibility.
 * GitHub Pages does not support server-side API routes.
 * The photography page has been updated to use static data from src/lib/config.ts.
 */
export const dynamic = 'force-static';

export async function GET() {
  return new Response(JSON.stringify({ message: "API routes are disabled in static export mode." }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
