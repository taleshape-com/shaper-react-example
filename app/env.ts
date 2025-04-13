const DASHBOARD_ID = process.env.DASHBOARD_ID;
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL || "http://localhost:5454";
const VARIABLES = process.env.VARIABLES || "{}";

export function env() {
  if (!DASHBOARD_ID) {
    throw new Error("DASHBOARD_ID env var is required");
  }
  if (!API_KEY) {
    throw new Error("API_KEY env var is required");
  }

  return {
    DASHBOARD_ID,
    API_KEY,
    BASE_URL,
    VARIABLES,
  };
}
