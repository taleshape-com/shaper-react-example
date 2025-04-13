import { useFetcher } from "react-router";
import type { Route } from "./+types/home";
import type { Info as JwtInfo } from "./+types/jwt";
import { ShaperDashboard } from "shaper-react";
import { env } from "../env";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export function loader() {
  const { BASE_URL, DASHBOARD_ID } = env();
  return {
    dashboardId: DASHBOARD_ID,
    baseUrl: BASE_URL,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher<JwtInfo['loaderData']>();

  return (
    <div>
      <h1 className="text-xl font-bold">Embedding Demo</h1>
      <p>Dashboard will be embedded here:</p>
      <ShaperDashboard
        baseUrl={loaderData.baseUrl}
        jwt={fetcher.data?.jwt}
        refreshJwt={() => {
          fetcher.load("/jwt");
        }}
        id={loaderData.dashboardId}
      />
    </div>
  );
}
