import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("jwt", "routes/jwt.tsx"),
] satisfies RouteConfig;
