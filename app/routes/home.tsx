import type { Route } from "./+types/home";
import { ShaperDashboard } from "shaper-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const getJwt = async (): Promise<string> => {
    console.log('get jwt');
    const res = await fetch("/api/jwt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Embedding Demo</h1>
      <p>Dashboard will be embedded here:</p>
      <ShaperDashboard
        baseUrl="http://localhost:5454"
        dashboardId="hktf9zy22rurvut8txg931m9"
        getJwt={getJwt}
      />
    </div>
  );
}
