// pages/api/google-reviews.js

export async function GET(req, res) {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;
  
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      // Extract reviews, rating, and user_ratings_total
      const reviews = data.result?.reviews || [];
      const rating = data.result?.rating || 0;
      const user_ratings_total = data.result?.user_ratings_total || 0;
      
      return new Response(
        JSON.stringify({ reviews, rating, user_ratings_total }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch reviews", reviews: [] }),
        { status: 500 }
      );
    }
  }
  