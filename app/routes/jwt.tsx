const BASE_URL = "http://localhost:5454";
const API_KEY = process.env.API_KEY;
const DASHBOARD_ID = process.env.DASHBOARD_ID;
const VARIABLES = process.env.VARIABLES || "{}";

export async function loader(): Promise<{ jwt: string }> {
  if (!API_KEY) {
    throw new Error("API_KEY env var is required");
  }

  const r = await fetch(`${BASE_URL}/api/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: API_KEY,
      dashboardId: DASHBOARD_ID,
      variables: JSON.parse(VARIABLES),
    }),
  });

  if (r.status !== 200) {
    throw new Error("Failed fetching token: " + (await r.text()));
  }

  return r.json();
}

