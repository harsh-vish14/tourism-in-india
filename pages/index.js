import { useSession } from "next-auth/client";
import { useEffect } from "react";
import Home from "../components/Home/home";
export default function HomePage() {
  const [session, loading] = useSession();
  useEffect(() => {
    console.log(session);
  }, [loading]);
  return <Home />;
}
