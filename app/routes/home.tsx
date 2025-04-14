import { useFetcher, useSearchParams } from "react-router";
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
  const [search, setSearch] = useSearchParams();

  // Setting vars and onVarsChanged is optional.
  // Only set them if you want to control the dashboard's variables from your app.
  //
  // onLoadError is optional. By default an empty div is rendered if the dashboard fails to load.
  return (
    <div>
      <h1 className="text-xl font-bold">Embedding Demo</h1>
      <p>Dashboard will be embedded here:</p>
      <ShaperDashboard
        baseUrl={loaderData.baseUrl}
        id={loaderData.dashboardId}
        jwt={fetcher.data?.jwt}
        refreshJwt={() => {
          fetcher.load("/jwt");
        }}
        vars={JSON.parse(search.get("analytics") ?? '{}')}
        onVarsChanged={(newVars) => {
          search.set("analytics", JSON.stringify(newVars));
          setSearch(search);
        }}
        onLoadError={(error) => {
          console.error("Error loading dashboard:", error);
        }}
      />
    </div>
  );
}
