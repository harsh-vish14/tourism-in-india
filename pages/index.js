import { useSession } from "next-auth/client";
import { useEffect } from "react";

export default function Home() {
  const [session, loading] = useSession();
  useEffect(() => {
    console.log(session);
  }, [loading]);
  return <div>hello next js</div>;
}
