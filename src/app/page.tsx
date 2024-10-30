import {PrivateRoute} from "@/features/auth";

export default function Home() {
  return (
      <PrivateRoute>
        hello, world
      </PrivateRoute>
  );
}
