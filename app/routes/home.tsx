import { useFetcher } from "react-router";
import type { Route } from "./+types/home";
import type { Info as JwtInfo } from "./+types/jwt";
import { ShaperDashboard } from "shaper-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const fetcher = useFetcher<JwtInfo['loaderData']>();

  return (
    <div>
      <h1 className="text-xl font-bold">Embedding Demo</h1>
      <p>Dashboard will be embedded here:</p>
      <ShaperDashboard
        baseUrl="http://localhost:5454"
        jwt={fetcher.data?.jwt}
        refreshJwt={() => {
          fetcher.load("/jwt");
        }}
        id="uxg64k41kc6el5v7o0vxfwbz"
      />
    </div>
  );
}
