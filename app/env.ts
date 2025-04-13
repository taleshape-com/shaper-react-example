const DASHBOARD_ID = process.env.DASHBOARD_ID ?? 'hktf9zy22rurvut8txg931m9';
const API_KEY = process.env.API_KEY ?? 'shaperkey.dezrwe4wk1ib1ps1l800d21h.JXPttYgCVakWLZkVdIaT5p7wk0B2lBfZ';
const BASE_URL = process.env.BASE_URL ?? "http://localhost:5454";
const VARIABLES = process.env.VARIABLES ?? "{}";

export function env() {
  return {
    DASHBOARD_ID,
    API_KEY,
    BASE_URL,
    VARIABLES,
  };
}
