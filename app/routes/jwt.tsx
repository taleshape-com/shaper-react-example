import { env } from "../env";

export async function loader(): Promise<{ jwt: string }> {
  const { BASE_URL, DASHBOARD_ID, API_KEY, VARIABLES } = env();
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

