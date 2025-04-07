import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the incoming JSON payload from the form submission
    const payload = await request.json();
    console.log("Received payload from EstimateForm:", payload);

    // Access webhook URLs and key from environment variables
    const webhookURL1 = process.env.NEXT_PUBLIC_WEBHOOK_URL_1;
    const webhookURL2BASE = process.env.NEXT_PUBLIC_WEBHOOK_URL_2;
    const webhookKey = process.env.NEXT_PUBLIC_ORBISX_API_KEY;

    // Second webhook: URL with query parameters
    // Construct the URL by replacing the placeholders with values from the payload.
    const webhookURL2 =
      `${webhookURL2BASE}?key=${webhookKey}` +
      `&contact=${encodeURIComponent(payload.contactName || "")}` +
      `&phone=${encodeURIComponent(payload.phone || "")}` +
      `&email=${encodeURIComponent(payload.email || "")}` +
      `&interest=${encodeURIComponent(payload.interested_in || "")}` +
      `&source=${encodeURIComponent(payload.source || "")}` +
      `&notes=${encodeURIComponent(payload.notes || "")}` +
      `&auto_year=${encodeURIComponent(payload.vehicle_information?.vehicle_year || "")}` +
      `&auto_make=${encodeURIComponent(payload.vehicle_information?.vehicle_make || "")}` +
      `&auto_model=${encodeURIComponent(payload.vehicle_information?.vehicle_model || "")}` +
      `&dothis=saveLead`;

    console.log("Sending payload to both webhooks...");

    // Send both requests concurrently using POST for each
    const [response1, response2] = await Promise.all([
      fetch(webhookURL1, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
      fetch(webhookURL2, {
        method: "POST",
      }),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log("Response from webhook 1:", data1);
    console.log("Response from webhook 2:", data2);

    if (!response1.ok || !response2.ok) {
      return NextResponse.json(
        {
          error: "One or both webhooks returned an error",
          details: { data1, data2 },
        },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "Success", data: { data1, data2 } });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
